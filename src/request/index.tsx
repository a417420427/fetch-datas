import axios from 'axios'

export const getHomeData = async url => {
    const res = await axios({
      url,
      method: 'get'
    })
    if(res && res.status === 200) {
      return res.data
    }
    return []
  }