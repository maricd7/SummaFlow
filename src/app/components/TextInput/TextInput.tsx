import React from "react";
import OpenAI from "openai";

interface TextInputProps {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}
function TextInput({ setInputText }: TextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <textarea
      onChange={handleChange}
      className="w-96 border-2 border-gray-950 p-4 rounded-lg h-96"
      placeholder="Enter your text here..."
    ></textarea>
  );
}

export default TextInput;
