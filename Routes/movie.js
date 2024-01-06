import express from "express";

import { addmovie, deletemovie, getmovie, updatemovie } from "../controller/movie.js";

const router = express.Router();

router.post('/addmovie', addmovie)
router.get('/getmovie' ,getmovie )

router.put("/:id", updatemovie);

router.delete("/:id", deletemovie);

export default router;
 