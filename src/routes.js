import path from 'node:path'

import { Router } from 'express'
import axios from 'axios'

const router = Router()

router.get('/', (req, res) => {
  return res.redirect('/signup')
})

router.get('/signup', (req, res) => {
  return res.sendFile(path.resolve('public', 'signup.html'))
})

router.post('/signup', (req, res) => {
  return res.redirect('/signin')
})

router.get('/signin', (req, res) => {
  return res.sendFile(path.resolve('public', 'signin.html'))
})

router.post('/signin', (req, res) => {
  return res.redirect('/app')
})

router.get('/app', (req, res) => {
  return res.sendFile(path.resolve('public', 'app.html'))
})

router.get('/converter', async (req, res) => {
  var origem = req.query["origem"];
  var destino = req.query["destino"];
  var valor = req.query["valor"];

  const resposta = await axios(
    'https://api.exchangerate.host/convert?from='+origem+'&to='+destino+'&amount='+valor
  )
  var resultado = resposta.data.result

  return res.json({
    resultado: resultado
  })
})

export default router
