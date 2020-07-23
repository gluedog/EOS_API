require('dotenv').config()
const fastify = require('fastify')
const fastifyGracefulShutdown = require('fastify-graceful-shutdown')
const fastifyOas = require('fastify-oas')
const fastifyCors = require('fastify-cors')
const { JsonRpc } = require('eosjs')
const fetch = require('node-fetch')

const api = fastify()

api.register(fastifyGracefulShutdown)
api.register(fastifyOas, {
    routePrefix: '/v1/docs',
    swagger: {
        info: {
            title: 'Billionaire API',
            description: 'Billionaire API',
            version: '0.1.0'
        },
        externalDocs: {
            url: 'https://billionairetoken.com',
            description: 'Find more info here'
        },
        host: process.env.ENDPOINT_URL,
        schemes: [process.env.ENDPOINT_SCHEME],
        tags: [
            { name: 'supply', description: 'Supply info' },
        ],
        consumes: ['application/json'],
        produces: ['application/json']
    },
    exposeRoute: true
})

api.register(fastifyCors, {
    origin: true
})

api.get('/supply', {
    schema: {
        tags: ['supply'],
        response: {
            200: {
                example: 123456.7890,
                type: 'number'
            }
        }
    }
}, async (request, reply) => {
    const rpc = new JsonRpc(process.env.EOS_ENDPOINT, { fetch });
    const statRows = await rpc.get_table_rows({
        json: true,
        'code': 'billionairet',
        'scope': 'XBL',
        'table': 'stat'
    });
    const statRow = statRows.rows[0];
    return parseFloat(statRow.maximum_supply.split(' ')[0]) - parseFloat(statRow.burned_supply.split(' ')[0]);
})

api.ready(err => {
    if (err) {
        console.error(err.message)
        throw err;
    }
    api.oas()
})

const port = process.env.API_PORT
api.listen(port, "0.0.0.0", err => {
    if (err) {
        console.error(`Exiting due to error: ${err.message}`)
        process.exit(1)
    }
    console.log(`server listening on ${port}`)
})