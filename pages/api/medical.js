import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://google-maps28.p.rapidapi.com/maps/api/place/textsearch/json',
  params: {
    query: 'medicine',
    location: '12.8230,80.0444',
    region: 'en',
    radius: '1000',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'dbee5e4f74msh9f3cd8db535ed9bp146c9ejsned6da298e26a',
    'X-RapidAPI-Host': 'google-maps28.p.rapidapi.com'
  }
};

export const getPlacesData = axios.request(options).then(function (response) {
	return (response.data);
}).catch(function (error) {
	console.error(error);
});



