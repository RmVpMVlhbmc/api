import fetch from 'node-fetch'

/**
 * @param  {String} url Request URL
 * @param  {Object} init Request metadata
 * @returns {Promise} Response
 */
function fetchX(url, init) {
  return new Promise((resolve, reject) => {
    fetch(url, init).then(
      (res) => {
        if (res.ok == true) {
          return resolve(res)
        } else {
          return reject(new Error(`${res.status} ${res.statusText}`))
        }
      },
      (err) => {
        return reject(err)
      }
    )
  })
}

export { fetchX }
