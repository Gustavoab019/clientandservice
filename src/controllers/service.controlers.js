import ServicoColabs from "../model/service"
export const createService = async (req, res, next) => {
  try {
    const task = new ServicoColabs({
      serviceName: "gustavisdfsdfdsfs",
      description:"fdsfsdfsd",
      category: "sfsfdfsdfsd",
      timeWork: "sfdsfsf",
      price: "sdfsdfsdfdsffsd",
      colabsId: req.params.id,
    });
    
    await task.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

 export const renderServico = async (req, res) => {
  try {
    const service = await ServicoColabs.find().lean();
    res.render("service", {
      service,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

 export const serviceToggle = async (req, res, next) => {
  let { id } = req.params;
  const task = await ServicoColabs.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/service");
}; 

export const editService = async (req, res, next) => {
  let { id, } = req.params;
  await ServicoColabs.updateOne(
    { "_id": id}, // Filter
    req.body// Update
)
.then((obj) => {
    console.log('Updated - ' + obj);
    res.redirect('/service')
})
.catch((err) => {
    console.log('Error: ' + err);
})
};

export const renderServiceEdit = async (req, res, next) => {
  const service = await ServicoColabs.findById(req.params.id).lean();
  res.render("serviceEdit", { service });
  console.log(service)
};

export const deleteService = async (req, res, next) => {
  let { id } = req.params;
  await ServicoColabs.deleteOne({ _id: id });
  res.redirect("/service");
};  


