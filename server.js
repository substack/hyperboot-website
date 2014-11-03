var alloc = require('tcp-bind');
var fd = alloc(80);

var http = require('http');
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2), {
    alias: { p: 'port' }
});

var ecstatic = require('ecstatic');
var stdir = ecstatic(__dirname + '/static');

var hyperboot = require('hyperboot');
var boot = hyperboot({
    dir: __dirname + '/demo/hyperdata',
    name: 'hyperboot demo'
});

var server = http.createServer(function (req, res) {
    if (/^demo(?:\.|$)/.test(req.headers.host)) {
        if (boot.exec(req, res)) return;
        res.statusCode = 404;
        res.end('not found\n');
    }
    else stdir(req, res);
});
server.listen({ fd: fd });
