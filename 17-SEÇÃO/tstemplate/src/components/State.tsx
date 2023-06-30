import { ChangeEvent, useState } from "react"

type TextOrNull = string | null;

const State = () => {
  const [text, setText] = useState<TextOrNull>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  return (
    <div>
      <h3>Texto: {text}</h3>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State