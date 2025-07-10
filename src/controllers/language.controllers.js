import modelLanguage from "../models/language.model.js";

export const createLenguage = async (req, res) => {
  const { name, paradigm, release_year } = req.body;

  try {
    if (!name)
      return res.status(400).json({ message: "el campo `name` es obligatorio" });

    if (!paradigm)
      return res.status(400).json({ message: "el campo `paradigm` es obligatorio" });

    const languageExist = await modelLanguage.findOne({ where: { name } });
    if (languageExist)
      return res.status(400).json({ message: "ya existe este lenguaje" });

    const language = await modelLanguage.create({
      name,
      paradigm,
      release_year,
    });

    return res.status(200).json(language);

  } catch (error) {
    return res.status(400).json({ message: "hubo un error al crear" });
  }
};

export const getAllLenguage = async (req, res) =>{
    try{
        const language = await modelLanguage.findAll();
        return res.status(200).json(language)
    } catch (error) {
        return res.status(200).json({message:"hubo un error"});
    }
};

export const getlenguageById = async (req, res) => {
    try{
        const lenguage = await modelLanguage.findByPk(req.params.id)
        if (lenguage)
            return res.status(200).json(lenguage);
        else return res.status(404).json({message: "no se enconttro la pelicula"});
    } catch (error) {
        return res.status(400).json({message: "hubo un error al buscar los languages"});
    }
};

export const updateLanguage = async (req, res) => {
    const {name, paradigm, realse_year} = req.body;

    try{
        const languageExist = await modelLanguage.findOne({where: {name}});
        if (languageExist)
            return res.status(400).json({message: "ya existe este lenguaje"});

        const language = await modelLanguage.update({where: {name, paradigm, realse_year}});
        return res.status(200).json(language);
    } catch (error) {
        return res.status(400).json({message: "hubo un problema al actualizar"});
    }
};

export const daleteLanguage = async (req, res) => {
    try{
        const language = await modelLanguage.findByPk(req.params.id);
        if (language) { 
            const daleteLanguage = await modelLanguage.destroy(language);
        return res.status(200).json({message:"se elimino correctamente"});
        } else {
            return  res.status(404).json({message:"no se encontro la pelicual a eliminar"});
        }
    } catch(error) {
        return res.status(400).json({message:"Hubo un error al elimiar"});
    }
};
