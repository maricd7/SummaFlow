"use client";
import React, { useState } from "react";
import Loading from "../Loading/Loading";

interface ResultsProps {
  results: string;
  loading: boolean;
}
function Results({ results, loading }: ResultsProps) {
  return (
    <div className="w-96">
      <h4 className="font-semibold text-2xl text-gray-900">Results:</h4>
      {loading ? <Loading /> : <p>{results}</p>}
    </div>
  );
}

export default Results;
