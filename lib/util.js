const rp = require('request-promise');

exports.get_img = async function (size, keywords) {
    return rp({
        uri: `https://source.unsplash.com/${size}/?${keywords}`,
        method: 'get',
        resolveWithFullResponse: true
    }).then(function (response){
        return response.request.uri.href;
    })
}