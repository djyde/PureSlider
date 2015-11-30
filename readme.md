# PureSlider

A lightweight, no-dependency image slider library.

# Demo

http://djyde.github.io/PureSlider

# Install

CommonJS:

```bash
$ npm install pureslider
```

Browser:

Import the `dist/pureslider.dist.js` and link the `dist/pureslider.css`. 

# Usage

```javascript

import 'pureslider/src/pureslider.css' // Or any other way linking the stylesheet

import PureSlider from 'pureslider'

const slider = new PureSlider({ /** options **/ })

slider.slide() // start the slider
```

# API(unstable)

## PureSlider([,options])

options:

| key        | default |
|------------|---------|
| actionMode | fade    |
| duration   | 2000    |

## PureSlider.slide()

# Contribution

I make `PureSlider` is because I found that there is little image slider library I can use without jQuery. I just throw a brick in order to get a gem(notice that there is only one action mode yet). So contribution is very welcome. Let make `PureSlider` to be a good choice independent from jQuery.

# Used by

[![](https://dn-kiwistatic.qbox.me/liubai/v1/images/header-logo.jpg?imageView/2/w/300)](http://liubaiapp.com)

# License

MIT License