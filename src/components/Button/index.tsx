import React from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"

import getNews from "../../reducers/search/actions"

const Button = () => {
  const dispatch: Dispatch<any> = useDispatch()

  const fetchNews = React.useCallback(() => dispatch(getNews()), [dispatch])

  return (
    <button type="button" onClick={fetchNews}>
      Press to see News
    </button>
  )
}

export default Button
