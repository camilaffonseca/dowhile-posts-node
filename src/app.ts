import 'dotenv/config'

import express from 'express'

import { Server } from 'socket.io'
import http from 'http'
import cors from 'cors'

import { router } from './router'

const app = express()
app.use(cors())

const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
})

app.use(express.json())

app.use(router)

app.get('/github', (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
})

app.get('/signin/callback', (request, response) => {
  const { code } = request.query
  return response.json(code)
})

export { serverHttp, io }
