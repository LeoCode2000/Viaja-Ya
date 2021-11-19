const User = require('../models/User');
const Destino = require('../models/Destinos');
const destinoController = require('../controller/destinoController');
const { Router } = require('express');
const router = Router(); 

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello World'))

// reg
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    // console.log(newUser)
    await newUser.save();

    const token = jwt.sign({_id: newUser._id }, 'secretkey')

    res.status(200).json({token});
})


// log
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if (!user) return res.status(401).send("El correo no existe");
    if (user.password !== password) return res.status(401).send("Contraseña incorrecta");

    const token = jwt.sign({_id: user._id}, 'secretkey');
    res.status(200).json({token});
})
//CRUD
//Crear destinos
router.post('/destinos/crear', destinoController.crearDestino);

//leer destinos
router.get('/destinos', destinoController.listarDestinos); 
router.get('/destino/detalle/:id', destinoController.detalleDestino);

//Actualizar destinos
router.put('/destino/:id', destinoController.actualizarDestino);

//Borrar destino
router.delete('/destino/borrar/:id', destinoController.borrarDestino);

//Top destinos
router.get('/top-10-destinos', verifyToken, (req, res) => {
    res.json([
        {
            _id:1,
            name: 'Cartagena',
            desciption: 'Lorem ipsum'
        },
        {
            _id:2,
            name: 'Medellin',
            desciption: 'Lorem ipsum'
        },
        {
            _id:3,
            name: 'Barranquilla',
            desciption: 'Lorem ipsum'
        }
    ])
}) 

module.exports = router;

//Verificar token para users
function verifyToken(req, res, next) {
    console.log(req.headers.authorization)
    if (!req.headers.authorization) {
        return res.status(401).send('No autorizado poque no se encuentra');
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token == 'null') {
        return res.status(401).send('No autorizado por token');
    }

    const payload = jwt.verify(token, 'secretkey')
    console.log(payload)
    req.userId = payload._id;
    next();
}