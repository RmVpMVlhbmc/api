import { App } from '@tinyhttp/app'
import { raw } from '../.yarn/patches/milliparsec-2.2.1.js'

import { index } from './routes/index/index.js'
import { dump } from './routes/dump/index.js'

const app = new App({
  settings: {
    networkExtensions: true
  }
})

app
  .use(raw())
  .all('/', index)
  .all('/dump', dump)
  .all('/dump/:dump', dump)
  .listen(8080)
