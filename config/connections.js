module.exports.connections = {
    mongodb: {
        adapter: 'sails-mongo',
//        host: process.env.OPENSHIFT_MONGODB_DB_HOST,
//        port: process.env.OPENSHIFT_MONGODB_DB_PORT,
//        user: process.env.OPENSHIFT_MONGODB_DB_USERNAME,
//        password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
//        database: 'devesh1234'
        url: process.env.OPENSHIFT_MONGODB_DB_URL + "kitty"
        
    }
}