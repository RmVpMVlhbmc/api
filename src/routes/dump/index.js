import { hasBody } from 'milliparsec'

function dump(req, res) {
  const data = {
    headers: req['headers'],
    hostname: req['hostname'],
    ip: req['ip'],
    method: req['method'],
    path: req['path'],
    protocol: req['protocol'],
    url: req['originalUrl']
  }

  if (hasBody(req['method'])) {
    data['body'] = req['body']
  }

  if (req['path'] !== req['originalUrl']) {
    data['query'] = req['query']
  }

  res.json(data)
}

export { dump }
