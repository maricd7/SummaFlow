"use client";
import React, { useState } from "react";

interface ResultsProps {
  results: string;
}
function Results({ results }: ResultsProps) {
  return (
    <div className="w-96">
      <h4 className="font-semibold text-2xl text-gray-900">Results</h4>
      <p>{results}</p>
    </div>
  );
}

export default Results;
