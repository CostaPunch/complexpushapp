const dotenv = require('dotenv')
dotenv.config()
const { MongoClient } = require('mongodb')
    //  We are protecting our username and password, by oppening .env file and downloading "npm install dotenv". Check .env file //
    // Also, we will not include.env file to repository in HEROKU //
const client = new MongoClient(process.env.CONNECTIONSTRING)

async function start() {
    await client.connect()
    module.exports = client
    const app = require('./app')
    app.listen(process.env.PORT)
}

start()