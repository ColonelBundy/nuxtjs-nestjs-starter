import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './application.module'
import { Builder, Nuxt } from 'nuxt'
import { NuxtFilter } from './nuxt/nuxt.filter'
const config = require('../nuxt.config')
const Consola = require('consola')

// Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production')

async function bootstrap() {
  const app = new Nuxt(config)
  const { host, port } = config.env

  if (config.dev) {
    const builder = new Builder(app)
    await builder.build()
  } else {
    app.ready()
  }

  const server = await NestFactory.create(ApplicationModule)
  server.useGlobalFilters(new NuxtFilter(app))

  await server.listen(port, host, () => {
    Consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    })
  })
}

bootstrap()
