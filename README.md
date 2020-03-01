# hexo-random-top-img

[![NPM version](https://badge.fury.io/js/hexo-filter-auto-spacing.svg)](http://badge.fury.io/js/hexo-filter-auto-spacing)

Get a random image for top img.

## Install

``` bash
$ npm hexo-random-top-img --save
```

or
```bash
$ yarn add hexo-random-top-img
```

## Use
_config.yml
```yml
random_top_img:
  enable: true
  size: 1600x900 # size
  keywords: sky, cloud # keywords
  ignore: # ingore page
    - tags
    - categories
    - about
```