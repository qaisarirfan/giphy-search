import React from "react"
import { useSelector } from "react-redux"
import { selectError } from "../../reducers/search/selectors"

const Error = () => {
  const error = useSelector(selectError)

  return error ? (
    <div style={{ textAlign: "center" }}>
      <p>{error}</p>
    </div>
  ) : null
}

export default Error
