import { App } from '@tinyhttp/app'
import { raw } from '../.yarn/patches/milliparsec-2.2.1.js'

import { index } from './routes/index/index.js'
const app = new App()

app.use(raw()).all('/', index).listen(8080)
