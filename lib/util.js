const axios = require('axios');

exports.get_img = async function (size, keywords) {
    return axios({
        url: `https://source.unsplash.com/${size}/?${keywords}`,
        method: 'get',
    }).then(function (response){
        return response.request._redirectable._options.href
    })
}
