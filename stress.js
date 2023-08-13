import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
  vus: 30,
  duration: '30s'
}

export default function () {
  http.get('http://localhost:31000');
  sleep(1);
}