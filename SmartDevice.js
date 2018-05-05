const TuyaDevice = require('tuyapi');

module.exports = class SmartDevice {
    constructor(id, key, ip){
        this.delegate = new TuyaDevice({id, key, ip})
    }

    setStatus(statusString) {
        const device = this.delegate;

        let status;

        if(statusString === 'on'){
            status = true;
        } else if(statusString === 'off'){
            status = false;
        } else {
            console.error("Unsupported arg: " + statusString);
            return Promise.resolve(false);
        }

        return device.resolveIds()
            .then(() => {
                return device.set({set: status})
            })
            .then((result) => {
                console.log("Set successfully: " + result);
            })
            .catch((ex) => {
                console.error(ex);
            })
    }

    getStatus() {
        const device = this.delegate;

        return device.resolveIds()
            .then(() => {
                return device.get()
            })
            .then(console.log)
    }
};