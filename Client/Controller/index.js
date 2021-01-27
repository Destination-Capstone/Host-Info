import axios from 'axios';

const getData = () => (
  Promise.all([
    axios.get('http://54.67.25.138:3001/location/Austin'),
    axios.get('http://54.67.25.138:3001/hostInfo/Jon-Lasley'),
    axios.get('http://54.67.25.138:3001/toKnow/Model-H-is-for-house'),
  ])
);

export default getData;
