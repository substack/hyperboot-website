var http = require('http');
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2), {
    alias: { p: 'port' }
});

var ecstatic = require('ecstatic');
var stdir = ecstatic(__dirname + '/static');

var hyperboot = require('hyperboot');
var boot = hyperboot({
    dir: __dirname,
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
server.listen(argv.port);
