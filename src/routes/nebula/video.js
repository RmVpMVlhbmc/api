import { fetchVideo, fetchVideoStream, parseQuery } from '../../utils/nebula.js'

async function video(req, res) {
  try {
    const slug = parseQuery(req['query']['slug'], req['query']['url'], 'video')

    var video = await fetchVideo(slug)
  } catch (e) {
    return res.status(400).send(e.message)
  }

  res.json(video)
}

async function videoStream(req, res) {
  try {
    var slug = parseQuery(req['query']['slug'], req['query']['url'], 'video')

    var stream = await fetchVideoStream(slug)
  } catch (e) {
    return res.status(400).send(e.message)
  }

  if (req['query']['redirect'] === 'true') {
    res.redirect(stream['download'], 302)
  } else {
    res.json(stream)
  }
}

export { video, videoStream }
