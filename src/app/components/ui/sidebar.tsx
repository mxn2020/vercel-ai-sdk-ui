// components/ui/sidebar.tsx
import { FC } from 'react';
import Link from 'next/link';

const Sidebar: FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white">
      <nav className="p-4">
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/examples/stream-protocols">Stream Protocols</Link>
          </li>
          <li>
            <Link href="/examples/chatbot">Chatbot</Link>
          </li>
          {/* Add links to other examples */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
