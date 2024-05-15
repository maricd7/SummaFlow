"use client";
import TextInput from "./components/TextInput/TextInput";
import CtaButton from "./components/Button/CtaButton";
import Results from "./components/Results/Results";
import { useState } from "react";
import { CohereClient } from "cohere-ai";

interface SummType {
  name: string;
}

export default function Home() {
  const [inputText, setInputText] = useState<string>("");
  const [results, setResults] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const cohere = new CohereClient({
    token: process.env.NEXT_PUBLIC_COHERE,
  });

  const handleSummarize = async () => {
    setLoading(true);
    const summarize = await cohere.summarize({
      text: inputText,
    });
    if (summarize && summarize.summary) {
      setLoading(false);
      let name = summarize.summary;
      setResults(name);
    } else {
      setResults("Failed to summarize. Please try again.");
    }
  };

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
        <Results results={results} loading={loading} />
      </div>
      <CtaButton onClick={() => handleSummarize()} />
    </main>
  );
}
