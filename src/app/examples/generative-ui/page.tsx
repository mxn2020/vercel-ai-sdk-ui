'use client';

import { useChat } from 'ai/react';
import { Weather } from './components/weather';
import { Stock } from './components/stock';

export default function GenerativeUIExample() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/examples/generative-ui/api/chat',
  });

  return (
    <div>
      <h1>Generative UI Example</h1>
      <div className="chat-window">
        {messages.map((message) => (
          <div key={message.id}>
            <div>
              <strong>{message.role}:</strong> {message.content}
            </div>
            {message.toolInvocations?.map((toolInvocation) => {
              const { toolName, toolCallId, state } = toolInvocation;

              if (state === 'result') {
                if (toolName === 'displayWeather') {
                  const { result } = toolInvocation;
                  return (
                    <div key={toolCallId} className="mt-2">
                      <Weather {...result} />
                    </div>
                  );
                } else if (toolName === 'getStockPrice') {
                  const { result } = toolInvocation;
                  return (
                    <div key={toolCallId} className="mt-2">
                      <Stock {...result} />
                    </div>
                  );
                }
              } else {
                return (
                  <div key={toolCallId} className="mt-2">
                    {toolName === 'displayWeather' && <p>Loading weather...</p>}
                    {toolName === 'getStockPrice' && <p>Loading stock price...</p>}
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
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
