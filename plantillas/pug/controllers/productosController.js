const productos = []
let id = 1

exports.getAll=(req, res) => {
    res.render('productos.pug',{productos})
}
exports.add = (req, res) => {
    const { nombre, precio, img } = req.body;
    productos.push({ id,nombre, precio, img });
    id += 1;
    res.render('form');
}

exports.renderProducts = (req, res) => {
    res.render('productos');
}

exports.renderForm= (req, res) => {
    res.render('form');
}
