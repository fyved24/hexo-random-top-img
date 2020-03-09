const fs = require('hexo-fs');
const front = require('hexo-front-matter');
const util = require('./lib/util')

var config = hexo.config;
hexo.extend.filter.register('before_post_render',async function(data) {

  if (config.random_top_img.enable) {
    if (!config.random_top_img.ignore.includes(data.title)) {
      key = 'top_img';
      if (config.random_top_img.custom_key) {
        key = config.random_top_img.custom_key;
      }
      img = data[key];
      if (!img) {
        var size = config.random_top_img.size;
        var keywords = config.random_top_img.keywords;
        let tmpPost = front.parse(data.raw);
        let url = await util.get_img(size, keywords);
        if (config.random_top_img.save) {
<<<<<<< HEAD
          url = util.download_img(url, 'img')
=======
          url = util.download_img(url, 'source/images')
>>>>>>> 07b1822c2509b73deebf796bddb86b4323d554dc
        }
        tmpPost[key] = url;
        let postStr = front.stringify(tmpPost);
        postStr = '---\n' + postStr;
        var result = postStr.replace(/>-\n  /g, '');
        console.log(`new top img for ${tmpPost.title}`);
        console.log(url);
        fs.writeFileSync(data.full_source, result, 'utf-8');
      }
    }
  }
  return data;
});

