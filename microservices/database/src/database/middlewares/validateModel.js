module.exports = (req,res,next) => {
    const {model} = req.params;
    if(["characters","films","planets"].includes(model)){
        return next()
    }else{ 
        throw new Error("Este modelo no existe") 
    }
}