import 'whatwg-fetch';

// only public function of api. Other functions are private function
export function getUsers(){
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error){
  console.log(error); // eslint-disable-line no-console
}
