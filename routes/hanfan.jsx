
import Router from 'koa-router'
import axios from 'axios'
import { hanfan } from '../url'
import cheerio from 'cheerio'

const router = Router()

router.prefix('/hanfan')

router.get('/', async (ctx) => {
  let pageData = {
    webType: 'three',
    movieData: null
  }
  let res = await axios.get(hanfan.url)
  if (!res.error) {
    pageData.movieData = res.data
  }
  const $ = cheerio(res.data)
  const html = `
    <div>${JSON.stringify(pageData)}</div>
`
  const content = $.find('.excerpt')
  let datas = []
  for(let i=0; i<content.length; i++) {
    const dom = $.find(`.excerpt-${i+1}`)
    datas.push({
      alt: dom.find('.focus img').attr('alt'),
      src: dom.find('.focus img').attr('data-src'),
      tag: dom.find('.meta a').html()
    })
  }
  pageData.webUrl = hanfan.url
  ctx.body =`<html><div>${JSON.stringify(datas)}</div></html>`
})

router.get('/detail/:key', async ctx => {
  let key = decodeURIComponent(ctx.params.key)
  let url = `${hanfan.detail}${key}.html`
  let pageData = {}
  let res = await axios.get(url).charset('gbk').timeout(3600 * 1000)
  if (!res.error) {
    pageData = res.text
  }
  const html = `
    <div>${JSON.stringify(pageData)}</div>
  `
  pageData.webUrl = hanfan.url
  ctx.body = html
})

module.exports = router
