# demo app

## make a relase

To make a release, first fetch the necessary dependencies:

```
$ npm install .
```

then do:

```
$ npm run release -- -v 1.2.3 -m 'release notes...'
```

## upgrade hyperboot

Install the version of the hyperboot command you want to push to clients, then
do:

```
$ hyperboot upgrade
```
