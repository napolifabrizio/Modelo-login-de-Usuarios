import Usuarios from "../Models/Usuario.js";

class UsuarioController {
    static listarUsuarios = async (req, res) => {
        try {
            const response = await Usuarios.find({});
            res.status(200).json(response);
        } catch (err) {
            res.status(400).json({ message: `Error - ${err}`});
        }
    }
};

export default UsuarioController;