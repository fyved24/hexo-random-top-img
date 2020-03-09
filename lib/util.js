const axios = require('axios');
const path = require('path');
const fs = require('hexo-fs');

exports.get_img = async function (size, keywords) {
    return axios({
        url: `https://source.unsplash.com/${size}/?${keywords}`,
        method: 'get',
    }).then(function (response){
        return response.request._redirectable._options.href
    })
}
exports.download_img = function (url, filepath) {
    var t = new Date()
    name = `${t.toLocaleDateString()}-${t.toLocaleTimeString().replace(/:/g, '-')}.png`
    var fullpath = path.resolve(filepath, name)
    console.log(fullpath)
    axios({
        method: 'get',
        url: url,
        responseType: 'stream'
    }).then(function (response) {
        response.data.pipe(fs.createWriteStream(fullpath))
    });
    return `${filepath}/${name}`;
}