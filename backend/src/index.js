const express = require('express')
const app = express()

app.get('/api/getUser', (req, res) => {
  res.send({
    firstName: 'John',
    lastName: 'Wick'
  })
})

if (process.env.NODE_ENV === 'production') {
  const root = require('path').join(__dirname, '../../frontend', 'build')

  app.use(express.static(root))

  app.get("*", (req, res) => {
      res.sendFile('index.html', { root });
  })
}

const PORT = process.env.PORT || 4000

app.listen(PORT)