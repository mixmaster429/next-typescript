const withPlugins = require("next-compose-plugins");
const path = require("path");
const config = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};

module.exports = withPlugins([], config);