'use strict';

const expect = require('chai').expect;
const Plugin = require('./index');

describe('Plugin', () => {
  let plugin;

  beforeEach(() => {
    plugin = new Plugin({
      plugins: {},
    });
  });

  it('should be an object', () => {
    expect(plugin).to.be.ok;
  });

  it('should has #onCompile method', () => {
    expect(plugin.onCompile).to.be.an.instanceof(Function);
  });
});
