import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cryptoApi from '../../common/apis/cryptoApi'

export const fetchAsyncCryptoNews = createAsyncThunk('', async () => {
  const response = await cryptoApi.get(`/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=${9}`, {
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY
    },
  })
  const newDate = await response.data.value.map((item, index) => ({
    id: index + 1,
    image: item.image,
    url: item.url,
    name: item.name,
    description: item.description,
    isLike: false,
  }))
  return newDate;
})

const initialState = {
  cryptoNews: [],
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    removeCard(state, action) {
      state.cryptoNews = state.cryptoNews.filter(item => item.id !== action.payload)
    },
    likeCard(state, action) {
      state.cryptoNews = state.cryptoNews.map(item => item.id === action.payload ? {...item, isLike: !item.isLike} : item)
    }
  },
  extraReducers: {
    [fetchAsyncCryptoNews.fulfilled]: (state, { payload }) => {
      return {...state, cryptoNews: payload}
    },
  }
})

export const getCryptoNews = (state) => state.crypto.cryptoNews
export const { removeCard, likeCard } = cryptoSlice.actions;
export default cryptoSlice.reducer
