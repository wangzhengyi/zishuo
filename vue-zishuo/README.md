# vue-zishuo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Server start

```bash
cd /srv/www/zishuo-server
virtualenv --system-site-packages venv
source venv/bin/activate
gunicorn app:app -p log/app/pid -b 127.0.0.1:10001 -D deactivate
```

## install node-sass

```bash
npm install --msvs_version=2015 node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```