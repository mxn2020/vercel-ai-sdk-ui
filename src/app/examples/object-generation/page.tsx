'use client';

import { experimental_useObject as useObject } from 'ai/react';
import { notificationSchema } from './api/notifications/schema';

export default function ObjectGenerationExample() {
  const { object, submit, isLoading } = useObject({
    api: '/examples/object-generation/api/notifications',
    schema: notificationSchema,
  });

  return (
    <div>
      <h1>Object Generation Example</h1>
      <button
        onClick={() => submit('Messages during finals week.')}
        disabled={isLoading}
        className="p-2 bg-blue-500 text-white"
      >
        Generate Notifications
      </button>
      {isLoading && <p>Loading...</p>}
      <div className="mt-4">
        {object?.notifications?.map((notification, index) => (
          <div key={index} className="mb-2">
            <strong>{notification?.name}</strong>
            <p>{notification?.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
