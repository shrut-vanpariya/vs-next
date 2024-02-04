import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl md:text-4xl pb-10">Next.js Template</h1>
      <ul className="list-disc">
        <li>TypeScript</li>
        <li>ESLint</li>
        <li>Tailwind CSS</li>
        <li>src/ directory</li>
        <li>App Router</li>
        <li>@/* import alias</li>
        <li>Shadcn/ui</li>
      </ul>
      <div className="bottom-0 absolute mb-10 text-gray-600 border-b-2 border-gray-600 hover:text-black hover:border-black"> By Shrut Vanpariya</div>
    </main>
  );
}
