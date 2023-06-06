'use strict';

const vite = require('vite');

module.exports = async (ctx, next) => {
  const { app } = ctx;
  const { serverConfig = {} } = app.config.vitePlugin;
  
  app.vite = vite
  if (!app.viteServer) {
    app.viteServer = await (await vite.createServer(serverConfig)).listen();
  }

  await next();
};
