import Client from "../model/client";

export const createClient = async (req, res, next) => {
  try {
    const task = new Client({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      password: req.body.password,
      location: req.body.location
    });
    
    await task.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

export const renderClient = async (req, res) => {
  try {
    const tasks = await Client.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

 export const taskToggleDone = async (req, res, next) => {
  let { id } = req.params;
  const task = await Client.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};

export const editTask = async (req, res, next) => {
  let { id, } = req.params;
  await Client.updateOne(
    { "_id": id}, // Filter
    req.body // Update
)
.then((obj) => {
    console.log('Updated - ' + obj);
    res.redirect('/')
})
.catch((err) => {
    console.log('Error: ' + err);
})
};

export const renderTaskEdit = async (req, res, next) => {
  const task = await Client.findById(req.params.id).lean();
  res.render("edit", { task });
};


export const deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await Client.deleteOne({ _id: id });
  res.redirect("/");
}; 
