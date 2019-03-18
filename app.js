const express = require('express');
const bodyparser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyparser.json());

app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
        schema {
            query: 
            mutation:
        }
    `),
    rootValue: {}
}));

app.listen(3000);