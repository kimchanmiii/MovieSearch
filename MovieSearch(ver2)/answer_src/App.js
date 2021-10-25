import React, { useCallback, useState } from 'react';
import MainFrame from "./components/MainFrame"
import SearchForm from "./components/SearchForm"
import MovieInfoFrame from "./components/MovieInfoFrame"
import { naverMoviesApi } from './api'


function App() {
  let [isLoading, setIsLoading] = useState(false);
  let [movies, setMovie] = useState([]);
  let [visibleIdx, setVisibleIdx] = useState(-1);

  const onInsert = useCallback(
    (queryValue, indexButtons) => {
      if (queryValue === "") {
        setIsLoading(false);
        setMovie([]);
      } else {
        setIsLoading(true);

        let result;

        (async (query) => {
          try {
            const response = await naverMoviesApi.search(query);
            result = response.data.items;

            setMovie(result); // Movie를 갱신함
          } catch (error) {
            console.log(error);
          }
        })(queryValue, result);

        setIsLoading(false);
      }
    }
  )

  const onBtnClicked = useCallback(
    e => {
      let clickedIdx = e.target.value;
      setVisibleIdx(clickedIdx - 1);
    },
    []
  )

  return (
    <MainFrame>
      <SearchForm onInsert={onInsert} onBtnClicked={onBtnClicked} />
      <MovieInfoFrame movies={movies} isLoading={isLoading} visibleIdx={visibleIdx} />
    </MainFrame>
  );
}

export default App;
