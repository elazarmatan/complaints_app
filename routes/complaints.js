import express from 'express'
import {createComplaint,getAllComplaints} from '../db/dal.js'

const router = express.Router()

router.post('/admin',async(req,res) => {
    try {
        const allComplaints = await getAllComplaints()
        res.json(allComplaints)
    } catch (error) {
        res.status(400).send('error')
    }
})

router.post('/complaint',async (req,res) => {
    try {
        await createComplaint(req.body)
        res.end()
    } catch (error) {
        res.status(400).send('error')
    }
})

export function checkPassword(req,res,next){
    if(req.body.password !== process.env.PASSWORD) {
        res.status(400).send('password not match')
        return
    }
    next()
}
export default router