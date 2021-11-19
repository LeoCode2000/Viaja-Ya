const Destinos = require("../models/Destinos");

exports.crearDestino = async (req, res) => {
    try{
        let destino;
        destino = new Destinos(req.body);
        await destino.save();
        res.send(destino);

    } catch (err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
}

exports.listarDestinos = async (req, res) => {
    try{
        const destinos = await Destinos.find();
        res.json(destinos);
    } catch (err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarDestino = async (req, res) => {
    try{
        const { name, description, ubication, price } = req.body
        let destino = await Destinos.findById(req.params.id);

        if(!destino){
            res.status(404).json({msg: 'No existe el destino'})
        }

        destino.name = name;
        destino.description = description;
        destino.ubication = ubication;
        destino.price = price;

        destino = await Destinos.findOneAndUpdate({_id: req.params.id}, destino, {new: true})

        res.json(destino);

    }catch (err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
}

exports.detalleDestino = async (req, res) => {
    try{
        const { name, description, ubication, price } = req.body
        let destino = await Destinos.findById(req.params.id);

        if(!destino){
            res.status(404).json({msg: 'No existe el destino'})
        }

        res.json(destino);

    }catch (err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
}

exports.borrarDestino = async (req, res) => {
    try{
        const { name, description, ubication, price } = req.body
        let destino = await Destinos.findById(req.params.id);

        if(!destino){
            res.status(404).json({msg: 'No existe el destino'})
        }

        await Destinos.findOneAndRemove({_id: req.params.id });

        res.json({msg: 'Destino eliminado correctamente'});

    }catch (err){
        console.log(err);
        res.status(500).send('Hubo un error');
    }
}