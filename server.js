var alloc = require('tcp-bind');
var fd = alloc(80);

process.setgid(process.argv[2]);
process.setuid(process.argv[2]);

var http = require('http');
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2), {
    alias: { p: 'port' }
});

var ecstatic = require('ecstatic');
var stdir = ecstatic(__dirname + '/static');

var hyperboot = require('hyperboot');
var boots = {
    demo: hyperboot({
        dir: __dirname + '/demo/hyperdata',
        name: 'hyperboot demo'
    }),
    keyboot: hyperboot({
        dir: __dirname + '/../keyboot/hyperdata',
        name: 'keyboot'
    }),
    'keyboot-example-app': hyperboot({
        dir: __dirname + '/../keyboot-example-app-website/hyperdata',
        name: 'keyboot example app'
    })
};

var server = http.createServer(function (req, res) {
    if (/^demo\d*(?:\.|$)/.test(req.headers.host)) {
        serve('demo');
    }
    else if (/^keyboot(?:\.|$)/.test(req.headers.host)) {
        serve('keyboot');
    }
    else if (/^keyboot-example-app(?:\.|$)/.test(req.headers.host)) {
        serve('keyboot-example-app');
    }
    else stdir(req, res);
    
    function serve (name) {
        if (boots[name].exec(req, res)) return;
        res.statusCode = 404;
        res.end('not found\n');
    }
});
server.listen({ fd: fd });
