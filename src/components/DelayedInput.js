import React, { useState, useEffect } from "react"

export default function DelayedInput({
  label = "",
  type = "text",
  id="",
  initialValue="",
  name="",
  inputDelay = 300,
  placeHolder = "",
  setInput
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInput(value);
    }, inputDelay);
    return () => clearTimeout(timer);
  }, [value, inputDelay, setInput]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <label htmlFor={id}>{label}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </label>
  );
}