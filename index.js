const express = require('express')
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Express server.")
})

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
]

app.post("/movies", (req, res) => {
    const newMovie = req.body

    if(!newMovie.title || !newMovie.director || !newMovie.year){
        res.status(400).json({error: "Title, director and year are required."})
    }else{
        movies.push(newMovie)
        res.status(201).json({message: "Movie added successfully.", movies: newMovie})
    }
})

app.get("/movies", (req, res) => {
    res.send(movies)
})

const items = [
  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }
];

app.post("/items", (req, res) => {
    const newItems = req.body

    if(!newItems.itemName || !newItems.color || !newItems.quantity){
        res.status(400).json({error: "ItemName, color and quantity are required."})
    }else{
        items.push(newItems)
        res.status(201).json({message: "Item added successfully.", items: newItems})
    }
})

app.get("/items", (req, res) => {
    res.send(items)
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})