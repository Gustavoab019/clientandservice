import { Router } from "express";
import {
  deleteTask,
  taskToggleDone,
  renderTaskEdit,
  editTask,
  renderClient,
  createClient,
} from "../controllers/clients.controllers";

import { 
  createColaborador,
  renderColaborador,
  colabsToggle,
  editColabs,
  renderColabsEdit,
  deleteColabs,
} from "../controllers/colabs.controllers";

import { 
  createService,
  renderServiceEdit, 
  renderServico,
  editService,
  deleteService,
  serviceToggle,
  renderJobs
} from "../controllers/service.controlers";

const router = Router();

// Render all Client
 router.get("/", renderClient); 

router.post("/tasks/add", createClient);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);
// End Client 

// Render all Colaborador
router.get("/colabs", renderColaborador); 

router.post("/colabs/add", createColaborador);

router.get("/colabs/:id/colabsToggle", colabsToggle);

router.get("/colabs/:id/edit", renderColabsEdit);

router.post("/colabs/:id/edit", editColabs);

router.get("/colabs/:id/delete", deleteColabs);
// End Colaborador 

// Render all Client
router.get("/service", renderServico);

router.post("/service/:id/add", createService);

router.get("/service/:id/delete", deleteService);

router.post("/service/:id/edit", editService);

router.get("/service/:id/edit", renderServiceEdit);

router.get("/service/:id/serviceToggle", serviceToggle);

router.get('/jobs', (req, res) => {
  res.render('jobs/main')
})


export default router;
