import express from 'express'

const router = express.Router()

router.post('/admin',(req,res) => {
    res.send('succes')
})

router.post('/complaint',(req,res) => {
    console.log('hi')
    res.send(req.body)
})

export function checkPassword(req,res,next){
    if(req.body.password !== process.env.PASSWORD) {
        res.status(400).send('password not match')
        return
    }
    next()
}
export default router