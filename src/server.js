import Hapi from '@hapi/hapi';
import routes from './routes';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    routes.forEach(route => server.route(route));

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();