'use strict';
// Plain JS so TypeScript does not try to compile this file.
// The Express app is bundled into dist/vercel.cjs by the build step.
const { default: app } = require('../dist/vercel.cjs');
module.exports = app;
