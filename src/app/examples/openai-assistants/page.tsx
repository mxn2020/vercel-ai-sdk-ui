'use client';

import { Message, useAssistant } from 'ai/react';

export default function OpenAIAssistantExample() {
  const { status, messages, input, submitMessage, handleInputChange } = useAssistant({
    api: '/examples/openai-assistants/api/assistant',
  });

  return (
    <div>
      <h1>OpenAI Assistants Example</h1>
      <div className="chat-window">
        {messages.map((m: Message) => (
          <div key={m.id}>
            <strong>{`${m.role}: `}</strong>
            {m.role !== 'data' && m.content}
            {m.role === 'data' && (
              <>
                {(m.data as any).description}
                <br />
                <pre className="bg-gray-200 p-2">
                  {JSON.stringify(m.data, null, 2)}
                </pre>
              </>
            )}
          </div>
        ))}
      </div>
      {status === 'in_progress' && <p>Assistant is processing...</p>}
      <form onSubmit={submitMessage} className="mt-4">
        <input
          disabled={status !== 'awaiting_message'}
          value={input}
          placeholder="Type your message"
          onChange={handleInputChange}
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Send
        </button>
      </form>
    </div>
  );
}
