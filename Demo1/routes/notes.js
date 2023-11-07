import express from "express"
import { deletedNotes, getAllNotes, getUserNotes, postNewNotes, updatedNotes } from "../controllers/notes.js";
const router = express.Router();

// get all routers
router.get("/all",async(req,res) => {
    try {
        
      const  notes = await  getAllNotes(req);
      if(!notes || notes.length<=0 ){
        return res.status(404).json({
            error: "no content available",
        })
      }
      res.status(200).json({
        date: notes,
      })
    } catch (error) {
     console.log(error);
     res.status(500).json({error: "internal server error"})
    }
});
//get all users
router.get("/user/all",async(req,res) => {
    try {
        
        const notes = await getUserNotes(req);
        if(!notes || notes.length <= 0){
            return res.status(404).json({
                error : "no content avaiable"
            })
        }
        res.status(200).json({
            data: notes,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error"}) 
    }
});
//add new user notes
router.post("/user/add",async(req,res) => {
    try {
       const newpost = await postNewNotes(req);
       if(!newpost){
        return res.status(400).json({
            error: "error while upload"
        })
       }
        res.status(201).json({
            message: "successfully uploaded",
            date: newpost
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error"}) 
    }
});

//edit user notes
router.put("/user/edit/:id",async(req,res) => {
    try {
        const editedNotes= await updatedNotes(req);
        if(!updatedNotes){
            return res.status(400).json({
                error: "error while editing"
            })
        }
        res.status(201).json({
            message: "successfully edited",
            date: editedNotes,
        })

    } catch (error) {
            console.log(error);
            res.status(500).json({error: "internal server error"}) 
    }
});
// delete user notes
router.delete("/user/delete/:id",async(req,res) => {
    try {
        const deleteNotes= await deletedNotes(req);
        if(!deletedNotes){
            return res.status(400).json({
                error: "error while deleting"
            })
        }
        res.status(200).json({
            message: "successfully deleted",
            
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error"}) 
    }
})
export const notesRouter = router;