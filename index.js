#!/usr/bin/env node

const program = require('commander');
const SmartDevice = require('./smart-device');

program.command('set-status <status> <id> <key>')
	.option('-i, --ip <ipAddress>', 'device ip')
	.action((status, id, key, cmd) => {
		new SmartDevice(id, key, cmd.ip).setStatus(status);
	});

program.command('get-status <id> <key>')
	.option('-i, --ip <ipAddress>', 'device ip')
	.action((id, key, cmd) => {
		new SmartDevice(id, key, cmd.ip).getStatus();
	});

program.parse(process.argv);
