import ajax from './AxiosService';

const API_URL = 'https://rickandmortyapi.com';

const ApiService = function () {
  const getEpisodeList = () => {
    return ajax.get(API_URL + '/api/episode');
  };

  const getEpisode = id => {
    return ajax.get(API_URL + '/api/episode/' + id);
  };

  const getCharacter = id => {
    return ajax.get(API_URL + '/api/character/' + id);
  };

  return {
    getEpisode,
    getEpisodeList,
    getCharacter,
  };
};

export default ApiService();
