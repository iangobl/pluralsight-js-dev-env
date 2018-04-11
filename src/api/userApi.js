import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

// get the base url to allow us to mock api calls if in dev environment.
const baseUrl = getBaseUrl();

// only public function of api. Other functions are private function
export function getUser(){
  return get('user');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error){
  console.log(error); // eslint-disable-line no-console
}
