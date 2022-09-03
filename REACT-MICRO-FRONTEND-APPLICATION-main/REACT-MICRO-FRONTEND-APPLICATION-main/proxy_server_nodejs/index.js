const express = require('express')
const request = require('request')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: (origin, callback) => {
    callback(null, true)
  },
}
app.options('*', cors(corsOptions))

const url = 'http://localhost:8080'

app.use('/', cors(corsOptions), (req, res) => {
  const request_url = `${url}${req.url}`

  req.pipe(request(request_url)).pipe(res)
})

app.listen(process.env.PORT || 5000)
