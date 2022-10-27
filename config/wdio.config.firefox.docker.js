const {config} = require("./wdio.conf");
const dockerFirefox = {
    ...config,
    capabilities: [{
        maxInstances: 5,
        browserName: "firefox",
        'moz:firefoxOptions': {
            args: [ '--window-size=1920,1280', ]
        },
    }]
};
exports.config = dockerFirefox;