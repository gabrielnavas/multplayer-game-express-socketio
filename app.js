import express from "express"
import http from 'http'

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const server = http.Server(app)
const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/client/index.html")
})


app.use("/client", express.static(path.__dirname + "/client"))

server.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))