import { App } from '@tinyhttp/app'
import { raw } from '../.yarn/patches/milliparsec-2.2.1.js'

import { index } from './routes/index/index.js'
import { dump } from './routes/dump/index.js'
import { generate } from './routes/generate/index.js'
import {
  video as nebulaVideo,
  videoStream as nebulaVideoStream
} from './routes/nebula/video.js'

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
  .get('/generate', generate)
  .get('/generate/:generate', generate)
  .get('/nebula/video', nebulaVideo)
  .get('/nebula/video/stream', nebulaVideoStream)
  .listen(8080)
