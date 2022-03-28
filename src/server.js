/* eslint-disable no-unused-vars */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async (request, response) => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server saat ini berjalan di ${server.info.uri}`);
};

init();
