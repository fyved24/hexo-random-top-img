# hexo-random-top-img

![npm](https://img.shields.io/npm/v/hexo-random-top-img)![GitHub package.json version](https://img.shields.io/github/package-json/v/fyved24/hexo-random-top-img)![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/fyved24/hexo-random-top-img/develop)

Get a random image for top img.

## Install

``` bash
$ npm install hexo-random-top-img --save
```

or
```bash
$ yarn add hexo-random-top-img
```

## Use

If you use the theme, its top img format is as follows, you can use directly

```
title: Hello World
top_img: https://via.placeholder.com/1600x900.png?text=Your+Image+Url
```
or you can put your custom key in _config.yml 

```
title: Hello World
img: https://via.placeholder.com/1600x900.png?text=Your+Image+Url
```


_config.yml

```yml
random_top_img:
  enable: true
  size: 1600x900 # size
  # custom_key: img  # custom key
  keywords: sky, cloud # keywords
  ignore: # ingore page
    - tags
    - categories
    - about
```

