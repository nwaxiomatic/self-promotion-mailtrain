const url = require('url');
const mysqlParts = url.parse(process.env.CLEARDB_DATABASE_URL);

module.exports = {
    editors: [
        ['summernote', 'Summernote'],
        ['codeeditor', 'Code Editor']
    ],
    log: {
        level: 'error'
    },
    www: {
        port: process.env.PORT || 5000,
        secret: process.env.WWW_SECRET || 'a cat'
    },
    mysql: {
        // MySQL config must be an Object because of https://git.io/vdv4p
        host: mysqlParts.hostname,
        user: mysqlParts.auth.split(':')[0],
        password: mysqlParts.auth.split(':')[1],
        database: mysqlParts.pathname.substr(1),
        port: mysqlParts.port,
        connectionLimit: 8
    },
    redis: {
        enabled: true,
        url: process.env.REDIS_URL,
        db: 0
    }
}