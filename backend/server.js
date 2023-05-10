const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/dialogs', (req, res) => {
  const dialogs=[
    {question:"toto",answer:"tata"}, 
    {question:"Salut", answer:"Salut"}, 
    {question:"ça va ?", answer:"bien et toi ?"}
    ]
  res.status(200).json({message: dialogs })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})