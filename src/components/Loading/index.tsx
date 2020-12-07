import React from "react"
import { useSelector } from "react-redux"
import { selectLoader } from "../../reducers/search/selectors"

const Laoading = () => {
  const loading = useSelector(selectLoader)

  return loading ? (
    <div style={{ textAlign: "center" }}>
      <p>Loading...</p>
    </div>
  ) : null
}

export default Laoading
