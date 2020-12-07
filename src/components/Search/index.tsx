import React from "react"
import styles from "./Search.module.css"

type Props = {
  setValue: Function
  onSubmit: Function
  val: string
}

const Search: React.FC<Props> = ({ setValue, onSubmit, val }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        placeholder=""
        onChange={({ target: { value } }) => setValue(value)}
        value={val}
        name="search"
        className={styles.input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit()
          }
        }}
      />
      <button
        className={styles.button}
        type="button"
        onClick={() => onSubmit()}>
        Search
      </button>
    </div>
  )
}

export default Search
