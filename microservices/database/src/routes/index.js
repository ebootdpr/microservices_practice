const {Router} = require("express")
const store =require("../database/")
const { validateModel } = require("../database/middlewares")
const router = Router()

router.get("/:model",validateModel,async (req,res)=>{
    try {
        const {model} = req.params
        const response = await store[model].list();
        res.status(200).send(JSON.stringify(response)) 
    } catch (error) {
        res.status(500).send(JSON.stringify("DB: "+error.message)) 
    }

})

router.get("/:model/:id",validateModel,async (req,res)=>{
    try {
    const {model,id} = req.params
    const response = await store[model].get(id);
    res.status(200).send(JSON.stringify(response)) 
} catch (error) {
    res.status(500).send(JSON.stringify("DB: "+error.message)) 
}
})

module.exports =router