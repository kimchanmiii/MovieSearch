import axios from 'axios';

// const ID_KEY = 'MPF85hV_M_MgoJFe46Ms';
// const SECRET_KEY = 'uSvgQms2A1';

const api = axios.create({
  baseURL: 'https://yts.mx/api',
});

export const ytsMoviesApi = {
  search: () => api.get('/v2/list_movies.json', {
    params: {
      sort_by:"like_count", 
      order_by:"desc", 
      limit:5 
    }
  })
};
