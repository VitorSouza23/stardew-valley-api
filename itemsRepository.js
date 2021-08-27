const csv = require('csvtojson')({delimiter: ';'});
const itemsFileName = 'items.csv';

const itemsRepository = {
    _itemsJson: [],
    _init: async () => {
        if(itemsRepository._itemsJson.length === 0) {
            itemsRepository._itemsJson = await csv.fromFile(itemsFileName)
        }
        return itemsRepository._itemsJson;
    },
    getAll: async () => {
        return await itemsRepository._init();
    },
    getById: async id => {
        const items = await itemsRepository._init();
        return items.find(e => e.id == id);
    },
    getByName: async name => {
        const items = await itemsRepository._init();
        return items.find(e => e.itemName.toLowerCase() == name.toLowerCase());
    }
}

module.exports = itemsRepository;

