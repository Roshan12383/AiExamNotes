import express from "express"
import isAuth from "../middleware/isAuth.js";
import { generateNote } from "../controllers/generate.controller.js";
import { getMyNotes, getSingleNotes } from "../controllers/notes.controller.js";

const notesRouter = express.Router();
notesRouter.post("/generate-notes", isAuth, generateNote);
notesRouter.get("/getnotes", isAuth, getMyNotes);
notesRouter.get("/:id", isAuth, getSingleNotes);

export default notesRouter;