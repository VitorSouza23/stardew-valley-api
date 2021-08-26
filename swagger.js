const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json';
const endpointsFiles = ['./endpoints.js'];

const doc = {
    info: {
        version: "1.5.0",
        title: "Stardew Valley Items ID API",
        description: "Use this API to find IDs from Stardew Valley game items"
    },
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            "name": "Items",
            "description": "Endpontos to find itens data"
        }
    ],
    definitions: {
        Item : {
            itemName: "Weeds",
            id: 2
        },
        Items: [
            {
                itemName: "Weeds",
                id: 2
            }
        ]
    }
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index');
});