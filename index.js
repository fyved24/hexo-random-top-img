const fs = require('hexo-fs');
const front = require('hexo-front-matter');
const util = require('./lib/util')

var config = hexo.config;
hexo.extend.filter.register('before_post_render',async function(data) {

  if (config.random_top_img.enable) {
    if (!config.random_top_img.ignore.includes(data.title)) {
      img = data.top_img;
      if (!img) {
        var size = config.random_top_img.size;
        var keywords = config.random_top_img.keywords;
        let tmpPost = front.parse(data.raw);
        
        let url = await util.get_img(size, keywords);
        tmpPost.top_img = url;
        let postStr = front.stringify(tmpPost);
        postStr = '---\n' + postStr;
        var result = postStr.replace('>-\n  ', '');
        console.log(`new top img for ${tmpPost.title}`);
        console.log(url);
        fs.writeFileSync(data.full_source, result, 'utf-8');
      }
    }
  }
  return data;
});

