"use client";

import { useCompletion } from "ai/react";

export default function TextStream() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    streamProtocol: "text",
    api: "/api/examples/text-stream",
  });

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleInputChange} />
      <button type="submit">Submit</button>
      <div>{completion}</div>
    </form>
  );
}
