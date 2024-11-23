'use client';

import { ToolInvocation } from 'ai';
import { Message, useChat } from 'ai/react';

export default function ChatbotWithToolsExample() {
  const { messages, input, handleInputChange, handleSubmit, addToolResult } = useChat({
    api: '/examples/chatbot-with-tools/api/chat',
    maxSteps: 5,
    async onToolCall({ toolCall }) {
      if (toolCall.toolName === 'getLocation') {
        const cities = ['New York', 'Los Angeles', 'Chicago', 'San Francisco'];
        return cities[Math.floor(Math.random() * cities.length)];
      }
    },
  });

  return (
    <div>
      <h1>Chatbot with Tools Example</h1>
      <div className="chat-window">
        {messages?.map((m: Message) => (
          <div key={m.id}>
            <strong>{m.role}:</strong> {m.content}
            {m.toolInvocations?.map((toolInvocation: ToolInvocation) => {
              const toolCallId = toolInvocation.toolCallId;
              const addResult = (result: string) =>
                addToolResult({ toolCallId, result });

              if (toolInvocation.toolName === 'askForConfirmation') {
                return (
                  <div key={toolCallId}>
                    {toolInvocation.args.message}
                    <div>
                      {'result' in toolInvocation ? (
                        <b>{toolInvocation.result}</b>
                      ) : (
                        <>
                          <button
                            onClick={() => addResult('Yes')}
                            className="mr-2 p-1 bg-green-500 text-white"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => addResult('No')}
                            className="p-1 bg-red-500 text-white"
                          >
                            No
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                );
              }

              return 'result' in toolInvocation ? (
                <div key={toolCallId}>
                  Tool call {`${toolInvocation.toolName}: `} {toolInvocation.result}
                </div>
              ) : (
                <div key={toolCallId}>Calling {toolInvocation.toolName}...</div>
              );
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
