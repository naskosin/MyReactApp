import { useState } from "react";

export const useCommentValidator = (initialState) => {
  const [error, setError] = useState(initialState);

  const setItem = (e) => {
    let text = e.currentTarget.value;
    console.log(text.length);
    if (text.length === 0) {
      setError({ text: "Text is required!" });
    } else {
      setError({ text: "Filled" });
    }
  };
  let isFormValid = error.text === "Filled";
  console.log(isFormValid);

  return [error, setItem, isFormValid];
};
