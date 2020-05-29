const express = require('express')
const app = express()

app.get('/api/getUser', (req, res) => {
  res.send({
    firstName: 'John',
    lastName: 'Wick'
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.relative(__dirname, 'frontend', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 4000

app.listen(PORT)