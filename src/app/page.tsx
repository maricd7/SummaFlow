"use client";
import Image from "next/image";
import TextInput from "./components/TextInput/TextInput";
import CtaButton from "./components/Button/CtaButton";
import Results from "./components/Results/Results";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState<string>("");
  async function summarizeText(inputText: string) {
    const OPENAI_API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
    const url = "https://api.openai.com/v1/chat/completions";
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputText }],
      temperature: 0.7,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error:", response.status);
        // Handle error cases here
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="font-black text-4xl text-gray-900">
        <span className="text-orange-500">SummaFlow</span> - Best online AI text
        summarizer
      </h2>
      <p className="text-gray-900 mt-4">
        Effortlessly condense lengthy texts with SummaFlow, the premier online
        AI text summarizer.
      </p>
      <div className="flex mt-8 gap-8">
        <TextInput setInputText={setInputText} />
        <Results />
      </div>
      <CtaButton onClick={() => summarizeText(inputText)} />
    </main>
  );
}
