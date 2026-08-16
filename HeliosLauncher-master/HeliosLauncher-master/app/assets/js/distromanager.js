const { DistributionAPI } = require('helios-core/common')
const path = require('path')
const { pathToFileURL } = require('url')

const ConfigManager = require('./configmanager')

const distroPath = path.join(__dirname, '../../../distribution.json')
exports.REMOTE_DISTRO_URL = pathToFileURL(distroPath).href

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api