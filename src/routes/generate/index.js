function generate(req, res) {
  const code = parseInt(req['params']['generate'])

  if (code >= 100 && code <= 599) {
    res.sendStatus(code)
  } else {
    res.sendStatus(200)
  }
}

export { generate }
