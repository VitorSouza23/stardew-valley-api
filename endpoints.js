const itemsRepository = require('./itemsRepository'); 

module.exports = function(app) {
    app.get('/items', async (req, res) => {
        // #swagger.tags = ['Items']
        // #swagger.description = 'Get all items names and IDs'

        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Items" },
               description: 'Found items.' 
        } */
        itemsRepository.getAll(items => res.send(items));
    });

    app.get('/items/:id', async (req, res) => {
        // #swagger.tags = ['Items']
        // #swagger.description = 'Get item name by ID'
        // #swagger.parameters['id'] = { description: 'Item ID' }

        itemsRepository.getById(req.params.id, item => {
            if(item == null) {
                /* #swagger.responses[400] = {
                        description: 'Not founded.'
                } */
                res.status(400).send("Not founded");
            } else {
                /* #swagger.responses[200] = {
                        schema: { $ref: "#/definitions/Item" },
                        description: 'Found item.'
                } */
                res.status(200).send(item);
            }
        });
    });

    app.get('/items/name/:name', async (req, res) => {
        // #swagger.tags = ['Items']
        // #swagger.description = 'Get item ID by name'
        // #swagger.parameters['name'] = { description: 'Item name' }

        itemsRepository.getByName(req.params.name, item => {
            if(item == null) {
                 /* #swagger.responses[400] = {
                        description: 'Not founded.'
                } */
                res.status(400).send("Not founded");
            } else {
                 /* #swagger.responses[200] = {
                        schema: { $ref: "#/definitions/Item" },
                        description: 'Found item.'
                } */
                res.status(200).send(item);
            }
        });
    });
}