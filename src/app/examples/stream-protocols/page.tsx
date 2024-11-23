'use client';

import { useCompletion } from 'ai/react';

export default function StreamProtocolsExample() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: '/examples/stream-protocols/api/completion',
    streamProtocol: 'text',
  });

  return (
    <div>
      <h1>Stream Protocols Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt"
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Submit
        </button>
      </form>
      <div className="mt-4">
        <strong>Completion:</strong>
        <p>{completion}</p>
      </div>
    </div>
  );
}
