import { fetchX } from './network.js'

async function fetchAuth() {
  const res = await (
    await fetchX('https://api.watchnebula.com/api/v1/authorization/', {
      body: '{}',
      method: 'POST'
    })
  ).json()

  return {
    Accept: 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9',
    Authorization: `Bearer ${res['token']}`,
    Origin: 'https://nebula.app',
    Referer: 'https://nebula.app/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent':
      'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Mobile Safari/537.36'
  }
}

async function fetchVideo(slug) {
  const auth = await fetchAuth()

  const res = await (
    await fetchX(`https://content.watchnebula.com/video/${slug}/`, {
      headers: auth
    })
  ).json()

  return res
}

async function fetchVideoStream(slug) {
  const auth = await fetchAuth()

  const res = await (
    await fetchX(`https://content.watchnebula.com/video/${slug}/stream/`, {
      headers: auth
    })
  ).json()

  return res
}

function parseQuery(slug, url, type) {
  if (slug !== undefined) {
    return slug
  }

  if (url !== undefined) {
    var parsedUrl = parseUrl(url)

    if (parsedUrl['type'] === type) {
      return parsedUrl[type + 'Slug']
    }
  }

  throw new Error('Invalid request.')
}

function parseUrl(url) {
  const splittedUrl = url.split('/')

  if (splittedUrl.length === 4) {
    return { type: 'channel', channelSlug: splittedUrl[3] }
  } else if (splittedUrl.length === 5) {
    if (splittedUrl[3] === 'videos') {
      return { type: 'video', videoSlug: splittedUrl[4] }
    } else {
      return {
        type: 'possible_podcast',
        channelSlug: splittedUrl[3],
        podcastSlug: splittedUrl[4]
      }
    }
  } else {
    throw new Error('Invalid Nebula URL.')
  }
}

export { fetchAuth, fetchVideo, fetchVideoStream, parseQuery, parseUrl }
