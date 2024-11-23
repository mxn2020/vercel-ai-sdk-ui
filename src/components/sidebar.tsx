// components/sidebar.tsx
import Link from 'next/link';

export function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white">
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
                    <li>
                        <Link href="/examples/object-generation">Object Generation</Link>
                    </li>
                    <li>
                        <Link href="/examples/storing-messages">Storing Messages</Link>
                    </li>
                    <li>
                        <Link href="/examples/chatbot-with-tools">Chatbot with Tools</Link>
                    </li>
                    <li>
                        <Link href="/examples/generative-ui">Generative UI</Link>
                    </li>
                    <li>
                        <Link href="/examples/completion">Completion</Link>
                    </li>
                    <li>
                        <Link href="/examples/error-handling">Error Handling</Link>
                    </li>
                    <li>
                        <Link href="/examples/openai-assistants">OpenAI Assistants</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
