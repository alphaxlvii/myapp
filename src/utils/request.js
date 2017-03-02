import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
// export default function request(url, options) {
//   url = 'http://appid6w3584vvum.dev'+url
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => ({ data }))
//     .catch(err => ({ err }));
// }
export default function request(url, options) {
  url = 'http://appid6w3584vvum.dev'+url
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

// const Ajax = require('robe-ajax')
// export default function request (url, options) {
//   if (options.cross) {
//     return Ajax.getJSON('http://query.yahooapis.com/v1/public/yql', {
//       q: "select * from json where url='" + url + '?' + Ajax.param(options.data) + "'",
//       format: 'json'
//     })
//   } else {
//     url = 'http://appid6w3584vvum.dev'+url
//     return Ajax.ajax({
//       url: url,
//       headers: {
//         'Authorization': 'Bearer ' + '121'
//       },
//       method: options.method || 'get',
//       data: options.data || {},
//       processData: options.method === 'get',
//       dataType: 'JSON'
//     }).done((data) => {
//       return data
//     })
//   }
// }
