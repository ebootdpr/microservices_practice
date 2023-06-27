const db = require("../data/index")
const {response} = require("../utils") 

module.exports = async (req,res) =>{
    const films = await db.list();
    response(res,200,films);
}