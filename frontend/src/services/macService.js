import axios from 'axios'

const URL = 'http://localhost:3000';


function getVendor(macAddress) {
    return axios
        .get(URL + `/${macAddress}`)
        .then(res => {
            return res.data
        })
        .catch(e => res.status(400).send(e))
}

export default {
    getVendor
}
