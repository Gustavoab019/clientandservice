import Colabs from "../model/colaborador.js";

export const createColaborador = async (req, res, next) => {
  try {
    const task = new Colabs({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      password: req.body.password,
      location: req.body.location
    });
    
    await task.save();
    res.redirect("/colabs");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const renderColaborador = async (req, res) => {
  try {
    const colabs = await Colabs.find().lean();
    res.render("colabs", {
      colabs,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

 export const colabsToggle = async (req, res, next) => {
  let { id } = req.params;
  const task = await Colabs.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/colabs");
};

export const editColabs = async (req, res, next) => {
  let { id, } = req.params;
  await Colabs.updateOne(
    { "_id": id}, // Filter
    req.body // Update
)
.then((obj) => {
    console.log('Updated - ' + obj);
    res.redirect('/colabs')
})
.catch((err) => {
    console.log('Error: ' + err);
})
};

export const renderColabsEdit = async (req, res, next) => {
  const colabs = await Colabs.findById(req.params.id).lean();
  res.render("colabsEdit", { colabs });
};


export const deleteColabs = async (req, res, next) => {
  let { id } = req.params;
  await Colabs.deleteOne({ _id: id });
  res.redirect("/colabs");
}; 
