'use strict';

const workboxBuild = require('workbox-build');

class WorkboxBrunch {
  constructor(config) {
    this.config = config.plugins.workbox || {};

    if (!this.config.globDirectory) {
      this.config.globDirectory = config.paths.public;
    }

    if (!this.config.globPatterns) {
      this.config.globPatterns = ['**/*.*'];
    }

    if (!this.config.swDest) {
      this.config.swDest = `${config.paths.public}/sw.js`;
    }
  }

  onCompile() {
    return workboxBuild.generateSW(this.config);
  }
}

WorkboxBrunch.prototype.brunchPlugin = true;

module.exports = WorkboxBrunch;
