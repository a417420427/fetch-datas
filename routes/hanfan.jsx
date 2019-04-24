
import Router from 'koa-router'
import axios from 'axios'
import { hanfan } from '../url'

const router = Router()


router.prefix('/hanfan')

router.get('/', async ctx => {
  let pageData = {
    webType: 'three',
    movieData: null
  }
  let res = await axios.get(hanfan.url)
  if (!res.error) {
    pageData.movieData = res.data
  }
  await ctx.render('hanfan', {
    title: 'hanfan-movie',
    router: hanfan,
    searchType: 'one',
    pageData
  })
})

router.get('/detail/:key', async ctx => {
  let key = decodeURIComponent(ctx.params.key)
  let url = `${hanfan.detail}${key}.html`
  let pageData = {}
  let res = await axios.get(url).charset('gbk').timeout(3600*1000)
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
