import axios from 'axios';

const ID_KEY = 'mJ4hbX7Kr5iS_A0aHhtT';
const SECRET_KEY = '8j2fD__z2p';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
  }
});

export const naverMoviesApi = {
  search: word => api.get('/v1/search/movie.json', {
    params: {
      query: word,
      display: 10
    }
  })
};
