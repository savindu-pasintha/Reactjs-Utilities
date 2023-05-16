import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  error: '',
  searchQuery: '',
  searchQueryParams: '',
  searchResult: {},
  popularSearchResult: [],
}

export const fetchSearchResult = createAsyncThunk(
  'search/fetchSearchResult',
  async (data) => {
    const { query, others } = data
    var url = ''
    var otherParms = others ? others : ''
    var queryParams = query ? query : '?query='
    url = process.env.REACT_APP_SEARCH_URL + queryParams + otherParms
    const response = await axios.get(url)
    return response.data
  },
)

const SearchReducerSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQueryAction: (state, action) => {
      state.searchQuery = action.payload
    },
    setSearchQueryParams: (state, action) => {
      state.searchQueryParams = action.payload
    },
    setPopularSearchResultAction: (state, action) => {
      state.popularSearchResult = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResult.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
      state.loading = false
      state.searchResult = action.payload
      state.error = ''
    })
    builder.addCase(fetchSearchResult.rejected, (state, action) => {
      state.loading = false
      state.searchResult = {}
      state.error = action.error.message
    })
  },
})

export const {
  setSearchQueryAction,
  setPopularSearchResultAction,
  setSearchQueryParams,
} = SearchReducerSlice.actions
export default SearchReducerSlice.reducer
