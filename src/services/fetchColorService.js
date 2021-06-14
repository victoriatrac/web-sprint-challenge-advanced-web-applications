import axiosWithAuth from '../helpers/axiosWithAuth'
import axios from 'axios'

const fetchColorService = () => {
  axios
    .get('http://localhost:5000/api/colors')
    .then(res => {
      console.log('colors: ', res)
    })
    .catch(err => {
      console.log('error fetching colors! ', err)
    })
}

export default fetchColorService