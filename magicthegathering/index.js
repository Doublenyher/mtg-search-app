
const config = require('./config')
const superagent = require('superagent')

const fetch = command => {
    return superagent.get(`${config.url}${command}`)
                        .then(response => response.body)
}

exports.cardSearch = keyword => {
    return fetch(`?name=${keyword}`)
}

exports.cardDetails = id => {
    return fetch(`?id=${id}`)
}
