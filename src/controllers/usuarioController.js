import Usuarios from "../Models/Usuario.js";

class UsuarioController {
  static listarUsuarios = async (req, res) => {
    try {
      const response = await Usuarios.find({});
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json({ message: `Error - ${err}` });
    }
  };

  static cadastrarUsuario = async (req, res) => {
    try {
      let usuario = new Usuarios(req.body);
      await usuario.save(usuario);
      res.status(201).json(usuario);
    } catch (err) {
      res.status(400).json({ message: `Error - ${err}` });
    }
  };

  static cadastrarSenhasUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      const autenticacao = req.headers.user_id;

      const { nomeSenha } = req.body;
      const { senha } = req.body;

      if (id === autenticacao) {
        await Usuarios.findByIdAndUpdate(
          id,
          { $set: { [`senhas.${nomeSenha}`]: senha } },
          { new: true }
        );
        const user = await Usuarios.findById(id);
        res.status(200).json(user);
      } else {
        res.status(400).send("Você não tem autorização para isso");
      }
    } catch (err) {
      res.status(400).json({ message: `Error - ${err}` });
    }
  };

  static deletarUsuario = async (req, res) => {
    try {
      const { id } = req.params;
      await Usuarios.findByIdAndDelete(id);
      res.status(200).send("Usuario deletado");
    } catch (err) {
      res.status(400).json({ message: `Error - ${err}` });
    }
  };
}

export default UsuarioController;
