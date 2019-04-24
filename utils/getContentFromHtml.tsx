const cheerio = require('cheerio')
//import cheerio from 'cheerio'

const $ = cheerio.load('<h2 class="title"><div>Hello world</div></h2>')
console.log($('div'))
// export const getHanFanHome = html => {

// }