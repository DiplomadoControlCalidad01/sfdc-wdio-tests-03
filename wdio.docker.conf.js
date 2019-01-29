// Let's load the default configs:
const defaultConfig = require('./wdio.conf').config;
const {docker} = require('./environment');

defaultConfig.host = docker.host;
defaultConfig.port = docker.port;
defaultConfig.path = '/wd/hub';

defaultConfig.services = [];

// Send the merged config to wdio
exports.config = defaultConfig;
