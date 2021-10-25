import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './SearchForm.scss';
import IndexButtonFrame from './IndexButtonFrame'

const SearchForm = ({ onInsert, onBtnClicked }) => {
  const [queryValue, setValue] = useState('');
  const [indexButtons, setIndexButtons] = useState([]);

  const onChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      let indexButtons;
      if (queryValue !== "") {
        indexButtons = [...Array(10).keys()];
        // indexButtons = indexButtons.map(idx => <button className="IndexButton" key={idx + 1} value={idx + 1}>{idx + 1}</button>);
      } else {
        indexButtons = [];
      }
      setIndexButtons(indexButtons);
      onInsert(queryValue, indexButtons);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위하여 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, indexButtons, queryValue],
  );

  return (
    <div>
      <div>
        <form className="SearchForm" onSubmit={onSubmit}>
          <input
            placeholder="영화 이름을 입력하세요"
            value={queryValue}
            onChange={onChange}
          />
          <button type="submit">
            <MdAdd />
          </button>
        </form>
      </div>
      <IndexButtonFrame indexButtons={indexButtons} onBtnClicked={onBtnClicked}>
      </IndexButtonFrame>
    </div>
  );
};

export default SearchForm;
