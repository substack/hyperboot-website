# demo app

To make a release, first install hyperboot and html-inline:

```
$ npm install hyperboot html-inline -g
```

then do:

```
$ html-inline app/index.html | hyperboot release -v 1.2.3 -m 'release notes...'
```
