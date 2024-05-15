"use client";
import React, { useState } from "react";

function Results() {
  const [results, setResults] = useState<string>("Lorem Ipsum");
  return (
    <div className="w-96">
      <h4 className="font-semibold text-2xl text-gray-900">Results</h4>
      <p>{results}</p>
    </div>
  );
}

export default Results;
