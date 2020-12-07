import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectNews } from "../../reducers/search/selectors"
import { news } from "../../reducers/search/types"
import styles from "./Items.module.css"

const NewsItem = () => {
  const defaultVal = {
    id: "",
    title: "",
    preview: "",
    img: "",
  }
  const [showPopup, setShowPopup] = useState(false)
  const [selected, setSelected] = useState<news>(defaultVal)
  const { ids, data }: any = useSelector(selectNews)

  const openPopup = (id: string) => {
    setShowPopup(true)
    setSelected(data[id])
  }

  const closePopup = () => {
    setShowPopup(false)
    setSelected(defaultVal)
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closePopup()
      }
    })
  }, [])

  const list = ids.map((id: string) => {
    const { img } = data[id]
    return (
      <button
        type="button"
        className={styles.masonryBrick}
        key={id}
        onClick={() => openPopup(id)}>
        <span style={{ backgroundImage: `url(${img})` }} />
      </button>
    )
  })
  return (
    <>
      <div className={styles.masonry}>{list}</div>
      {showPopup ? (
        <>
          <div className={styles.layer} />
          <div className={styles.popup}>
            <button type="button" className={styles.close} onClick={closePopup}>
              &times;
            </button>
            {selected.preview && (
              <div className={styles.content}>
                {selected.title && <h3>{selected.title}</h3>}
                <img src={selected.preview} alt="" />
              </div>
            )}
          </div>
        </>
      ) : null}
    </>
  )
}

export default NewsItem
