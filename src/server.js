import Hapi from '@hapi/hapi';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {
            return 'Hello, World!';
        }
    });

    server.route({
        method: 'POST',
        path: '/echo',
        handler: (request, h) => {
            const payload = request.payload;
            const name = payload.name || 'Stranger';
            return `Hello, ${name}!`;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();