import { hasBody } from 'milliparsec'

function dump(req, res) {
  const data = {
    headers: req['headers'],
    ip: req['ip'],
    method: req['method'],
    path: req['path']
  }

  if (hasBody(req['method'])) {
    data['body'] = req['body']
  }

  res.json(data)
}

export { dump }
