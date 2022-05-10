import { App } from '@tinyhttp/app'
import { raw } from 'milliparsec'

import { index } from './routes/index/index.js'
const app = new App()

app.use(raw()).all('/', index).listen(8080)
