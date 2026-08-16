const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Use the public raw distribution file over HTTPS. The packaged app cannot load a file:// URL.
exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/t9647135-ui/judy-launcher/main/HeliosLauncher-master/HeliosLauncher-master/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api