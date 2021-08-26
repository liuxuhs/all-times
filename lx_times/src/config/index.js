let envionment = process.env.NODE_ENV
let config = require('./env.'+envionment)
module.exports=config