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
  // A rota vai recebear 3 parametros:
  // 1. O primeiro parametro é a moeda de origem
  // 2. O segundo parametro é a moeda de destino
  // 3. O terceiro parametro é o valor a ser convertido
  // Deve ser retornado um JSON com o valor convertido
  // Exemplo:
  // http://localhost:3000/converter?origem=USD&destino=BRL&valor=100
  // Retorna:
  // {
  //   "resultado": "79.257029"
  // }
  //
  // TODO: Pegar os 3 parametros da requisição (origem, destino, valor)
  // TODO: Fazer a conversão usando uma api (https://api.exchangerate.host/convert)
  // TODO: Retornar o resultado no formato JSON
  //
  // Como fazer a conversão?
  // const resposta = await axios(
  //   'https://api.exchangerate.host/convert?from=USD&to=BRL&amount=100'
  // )
  // Para pegar o resultado, basta fazer isso: resposta.data.result
  //
  // Como retornar um json:
  // return res.json({
  //   resultado: '79.257029'
  // })
})

export default router
