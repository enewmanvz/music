//use express and path modules
const express = require('express')
const path = require('path')
//require models and associations
//const {Musician, Band} = require('./index')
const {Band} = require('./band')
const {Musician} = require('./musician')

//configure express app
const app = express()
const port = 3000

//return all bands
app.get('/bands', async (req,res) => {
    //find all instances of Band model
    const allBands = await Band.findAll()
    //respond with allBands as an array of json objects
    res.json(allBands)
})

//return one band by id
app.get('/bands/:id', async (req,res) => {
    //find one specific instance of the Band model
    const thisBand = await Band.findByPk(req.params.id)
    //respond with allBands as an array of json objects
    res.json(thisBand)
})


//return all musicians
app.get('/musicians', async (req,res) => {
    //find all instances of Musician model
    const allMusicians = await Musician.findAll()
    //respond with allMusicians as an array of json objects
    res.json(allMusicians)
})

//return one musician by id
app.get('/musicians/:id', async (req,res) => {
    //find one specific instance of the Musician model by id
    const thisMusician = await Musician.findByPk(req.params.id)
    //respond with allMusicians as an array of json objects
    res.json(thisMusician)
})

//return one musician by name
app.get('/musician-name/:name', async(req,res)=>{
    //find one specific instance of the Musician model by name
    const thisMusician = await Musician.findOne({where:{name: req.params.name}})
    res.json(thisMusician)
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})