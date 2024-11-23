'use client';

import { useChat } from 'ai/react';

export default function ChatbotExample() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/examples/chatbot/api/chat',
  });

  return (
    <div>
      <h1>Chatbot Example</h1>
      <div className="chat-window">
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.role === 'user' ? 'User' : 'AI'}:</strong> {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
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
