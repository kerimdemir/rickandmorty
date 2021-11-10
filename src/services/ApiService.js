import ajax from './AxiosService';

const API_URL = 'https://rickandmortyapi.com';
const ApiService = function () {
  const getEpisodeList = () => {
    return ajax.get(API_URL + '/api/episode');
  };

  return {
    getEpisodeList,
  };
};

export default ApiService();
