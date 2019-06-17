const apiService = require('../services/apiService.js');


module.exports = app => {
    app.get('/:macaddress', (req, res) => {
        let vendor = {};
        apiService.getVendor(req.params.macaddress).then(resp => {
            if (resp.message)
                return res.json(resp.message);
            vendor.name = resp;
            vendor.macAddress = req.params.macaddress;
            apiService.getLogo(vendor.name).then(r => {
                vendor.logo = r[0].logo;
                return res.json(vendor)
            })
        }).catch((err) => {
            console.log('err:', err)
            return res.status(400).send(err)
        });

    })

};
