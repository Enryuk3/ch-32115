const productos = []
let id = 1
exports.getAll=(req, res) => {
    res.render('productos',{productos})
}
exports.add= (req, res,next) => {
    const { nombre, precio, img } = req.body;
    try{
        if(!nombre || !precio||!img){
            res.render("backForm")
        }else{
            productos.push({ id, nombre, precio, img });
            id+=1;
            res.render('form');
        }

    }catch(err){
        next(err);
    }
}
exports.renderForm= (req, res) => {
    res.render('form');
}
