import axios from 'axios'
// 使用代理
const HOST = '/api/'
const GANK_HOST = '/gank/'

export const API_TYPE = {
  movie: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon'
  }
}

export function fetch (url) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url)
      .then(response => {
        resolve(response.data)
      })
  })
}

export function gankfetch (url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)
      })
  })
}

export function fetchItemByType (type) {
  return fetch(`${type}`)
}

export function fetchMoviesByType (type, start = 0, count = 20) {
  return fetchItemByType(`movie/${type}?start=${start}&count=${count}`)
}

export function fetchMovieById (id) {
  return fetch(`movie/subject/${id}`)
}

export function fetchSearchMovies (query, start = 0) {
  let url = encodeURI(`/movie/search?q=${query}&start=${start}`)
  return fetch(url)
}

export function fetchNewsLatest (page, limit) {
  let url = GANK_HOST + 'api/data/Android/' + limit + '/' + page
  return gankfetch(url)
}
