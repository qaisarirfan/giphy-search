import React, { useEffect, useState } from "react"
import "./App.css"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { throttle } from "lodash"

import PerfectScrollbar from "react-perfect-scrollbar"
import Items from "./components/Items"
import Loading from "./components/Loading"
import Search from "./components/Search"
import Error from "./components/Error"
import getNews from "./reducers/search/actions"

function App() {
  const [query, setQuery] = useState("")

  const dispatch: Dispatch<any> = useDispatch()

  const fetchNews = React.useCallback(
    (val: string, newSearch: boolean) => dispatch(getNews(val, newSearch)),
    [dispatch]
  )

  const handleChange = () => {
    fetchNews(query, true)
  }

  useEffect(() => {
    fetchNews(query, false)
  }, [])

  return (
    <div className="App">
      <Search setValue={setQuery} onSubmit={handleChange} val={query} />
      <PerfectScrollbar
        className="PerfectScrollbar"
        onYReachEnd={throttle(() => {
          fetchNews(query, false)
        }, 1500)}>
        <Items />
        <Loading />
        <Error />
      </PerfectScrollbar>
    </div>
  )
}

export default App
