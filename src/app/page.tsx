import Image from "next/image";
import TextInput from "./components/TextInput/TextInput";
import CtaButton from "./components/Button/CtaButton";
import Results from "./components/Results/Results";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h2 className="font-black text-4xl text-gray-900">
        <span className="text-orange-500">SummaFlow</span> - Best online AI text
        summarizer
      </h2>
      <p className="text-gray-900 mt-4">
        Effortlessly condense lengthy texts with SummaFlow, the premier online
        AI text summarizer.
      </p>
      <div className="flex mt-8 gap-8">
        <TextInput />
        <Results />
      </div>
      <CtaButton />
    </main>
  );
}
