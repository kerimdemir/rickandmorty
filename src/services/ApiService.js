import ajax from "./AxiosService";

const API_URL = "https://rickandmortyapi.com";

const ApiService = function() {
  const getEpisodeList = () => {
    return ajax.get(API_URL + "/api/episode");
  };

  const getEpisode = id => {
    return ajax.get(API_URL + "/api/episode/" + id);
  };

  const getCharacter = url => {
    return ajax.get(url);
  };

  return {
    getEpisode,
    getEpisodeList,
    getCharacter,
  };
};

export default ApiService();
