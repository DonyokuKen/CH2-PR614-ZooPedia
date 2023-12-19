const config = {
    db: {
        /* don't expose password or any sensitive info, done only for demo */
        host: "db4free.net",
        user: "animals_01",
        password: "animals123",
        database: "db_animals",
        connectTimeout: 60000
    },
    listPerPage: 10,
};
module.exports = config;