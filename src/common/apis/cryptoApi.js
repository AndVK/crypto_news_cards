import axios from 'axios'

export const API_KEY = 'd6640697ebmsh29db90a749bc71cp15773djsn97410ebd4d73'

export default axios.create({
  baseURL:'https://bing-news-search1.p.rapidapi.com',
})
