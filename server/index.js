
import Koa from 'koa'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import cors from 'koa-cors'
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users'
import city from './interface/city'
import search from './interface/search'
import product from './interface/product'
import cart from './interface/cart'
import order from './interface/order'


const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.proxy = true
app.use(bodyParser())
app.keys = ['mt','keys']
app.use(session({
  key   : 'mt',
  prefix: 'mt',
  store :new Redis()
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  credentials:true
}))

mongoose.connect(dbConfig.mongodb)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(users.routes()).use(users.allowedMethods())
  app.use(city.routes()).use(city.allowedMethods())
  app.use(search.routes()).use(search.allowedMethods())
  app.use(product.routes()).use(product.allowedMethods())
  app.use(cart.routes()).use(cart.allowedMethods())
  app.use(order.routes()).use(order.allowedMethods())

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
