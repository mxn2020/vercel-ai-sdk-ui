import Link from "next/link";

const menuItems = [
  { name: "Text Stream Protocol", path: "/examples/text-stream" },
  { name: "Data Stream Protocol", path: "/examples/data-stream" },
  { name: "Chatbot", path: "/examples/chatbot" },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen">
      <nav className="space-y-2 p-4">
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
