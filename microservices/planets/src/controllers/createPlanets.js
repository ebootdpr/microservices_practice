module.exports= (req,res)=>{
    res.status(200).send(req.body||"crear planeta")
}