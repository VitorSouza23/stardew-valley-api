const csv = require('csvtojson')({delimiter: ';'});
const itemsFileName = 'items.csv';

const itemsRepository = {
    _itemsJson: '',
    _init: function(){
        if(this._itemsJson === '') {
            return csv.fromFile(itemsFileName)
                .then((json) => {
                    this._itemsJson = json;
                    return this._itemsJson;
                })
                .catch(error => console.error(error));
        }
        return new Promise((resolve) => resolve(this._itemsJson));
    },
    getAll: function(callback) {
        this._init()
            .then((itemsJson) => callback(itemsJson))
            .catch(error => console.error(error));
    },
    getById: function(id, callback) {
        this._init()
            .then(itemsJson => {
                const item = itemsJson.find(e => e.id == id);
                callback(item);
            })
            .catch(error => console.error(error));
    },
    getByName: function(name, callback) {
        this._init()
            .then(itemsJson => {
                const item = itemsJson.find(e => e.itemName.toLowerCase() == name.toLowerCase());
                callback(item);
            })
            .catch(error => console.error(error));
    }
}

module.exports = itemsRepository;

