const axios = require('axios')
const URL = 'https://mac2vendor.com'


function getVendor(macAddress) {
    return axios.get(URL + '/api/v4/mac/' + macAddress)
        .then(res => {
            if (!res.data.success) return res.data;
            else return res.data.payload[0].vendor
        })
        .catch(e => console.log(e));
}

async function getLogo(name) {
    return axios.get(`https://autocomplete.clearbit.com/v1/companies/suggest?query=${name}`).then(res => {
        return res.data
    }).catch((e) => {
        throw new Error(e)
    })
}

module.exports = {
    getVendor,
    getLogo
}
