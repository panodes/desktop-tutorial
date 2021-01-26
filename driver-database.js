const BaseDatabase = require('./base-database')
const Driver = require('./driver')

class driverDatabase extends BaseDatabase {
}

module.exports = new driverDatabase(Driver)