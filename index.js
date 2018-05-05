#!/usr/bin/env node

const SmartDevice = require('./SmartDevice');
const program = require('commander');

program.command("set-status <status> <id> <key>")
    .option("-i, --ip <ipAddress>", "device ip")
    .action((status, id, key, cmd) => {
        new SmartDevice(id, key, cmd.ip).setStatus(status);
    });

program.command("get-status <id> <key>")
    .option("-i, --ip <ipAddress>", "device ip")
    .action((id, key, cmd) => {
        new SmartDevice(id, key, cmd.ip).getStatus();
    });

program.parse(process.argv);