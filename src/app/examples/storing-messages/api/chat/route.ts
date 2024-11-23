import { NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Mock function to represent storing chat messages
async function saveChat({ text, toolCalls, toolResults }) {
  // Implement your storage logic here
  console.log('Saving chat:', { text, toolCalls, toolResults });
}

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages,
    async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
      await saveChat({ text, toolCalls, toolResults });
    },
  });

  return result.toDataStreamResponse();
}
