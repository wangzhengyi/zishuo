import axios from 'axios'
// 使用代理
const HOST = '/api/'

export function fetch (url) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url)
      .then(response => {
        resolve(response.data)
      })
  })
}

export function searchMoviesByWord (word, start = 0, count = 10) {
  return fetch(`search?word=${word}&start=${start}&count=${count}`)
}
