const express = require("express")
const auth = require("../middleware/auth")
const router = new express.Router()
const Tasks = require("../models/task")

router.post("/tasks",auth, async (req,res) => {
    const task = new Tasks({
        ...req.body,
        owner: req.user._id
    })

    try{
        await task.save()
        res.status(201).send(task)
    } catch(e){
        res.status(400).send(e)
    }
    
    // const task = new Tasks(req.body)
    // task.find().then( () => {
    //     res.status(201).send(task)
    // }).catch( (e) => {
    //     res.status(400).send(e)
    // })
})

router.get("/tasks", auth,  async (req,res) => {
    try{
        const task = await Tasks.find({owner: req.user.id})
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
    
    // Tasks.find().then( (task) => {
    //     res.send(task)
    // }).catch( (e) => {
    //     res.status(500).send(e)
    // })
})

router.get("/tasks/:id", auth, async (req,res) => {
    const _id = req.params.id
    try{
        const task = await Tasks.findOne({_id, owner: req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
    
    // const _id = req.params.id
    // Tasks.findById(_id).then( (task) => {
    //     res.send(task)
    // }).catch( (e) => {
    //     res.status(500).send(e)
    // })
})

router.patch("/tasks/:id", auth, async (req,res) => {
    
    const updates = Object.keys(req.body)
    const allowedUpdates =  ['description', 'completed']
    const isValidOperation = updates.every((update)=> {
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation) {
        return res.status(400).send({error: "Invalid updates"})
    }
    
    
    try{
        const task = await Tasks.findOne({_id: req.params.id, owner: req.user._id})
        
        if(!task){
            return res.status(404).send()  
        }
        // const task_up = await Tasks.findById(req.params.id)
        updates.forEach((update) => task[update] = req.body[update])
        // const task_up = await Tasks.findByIdAndUpdate(req.params.id,req.body, {new: true, runValidators: true})
        await task.save()
        res.send(task)
    } catch(e){
        res.status(500).send(e)
    }
})

router.delete("/tasks/:id", auth, async (req,res) => {
    try{
        const task = await Tasks.findByIdAndDelete({_id: req.params.id, owner: req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router