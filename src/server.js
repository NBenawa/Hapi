import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database'

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    routes.forEach(route => server.route(route));

    db.connect();

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', () => {
    console.log('Shutting down server...');
    db.end();
    process.exit(0);
});

init();