'use client';

import { useChat } from 'ai/react';

export default function ErrorHandlingExample() {
  const { messages, input, handleInputChange, handleSubmit, error, reload } = useChat({
    api: '/examples/chatbot/api/chat', // Reuse the chatbot API
  });

  function customSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (error != null) {
      messages.pop(); // Remove last message
    }

    handleSubmit(event);
  }

  return (
    <div>
      <h1>Error Handling Example</h1>
      <div className="chat-window">
        {messages.map((m) => (
          <div key={m.id}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      {error && (
        <div className="mt-2 text-red-500">
          An error occurred. <button onClick={reload}>Retry</button>
        </div>
      )}
      <form onSubmit={customSubmit} className="mt-4">
        <input
          value={input}
          onChange={handleInputChange}
          disabled={error != null}
          placeholder="Type your message"
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Send
        </button>
      </form>
    </div>
  );
}
