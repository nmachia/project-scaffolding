import api from './api';

const URLS = {
	fetchDogUrl: 'breeds/image/random',
	fetchKittyUrl: 'images/search?format=json',
};
export const fetchDog = () => {
	return api.get(URLS.fetchDogUrl, {
		baseURL: 'https://dog.ceo/api/',
	});
};
