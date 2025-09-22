import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white flex flex-col">
      <div className="h-16 flex items-center justify-center font-bold text-[#dd9933] text-xl">
        ITL Admin
      </div>

      <nav className="flex-1 px-4 py-6 space-y-4">
        <Link href="/dashboard" className="block hover:text-[#dd9933]">Overview</Link>
        <Link href="/dashboard/users" className="block hover:text-[#dd9933]">Users</Link>
        <Link href="/dashboard/mentors" className="block hover:text-[#dd9933]">Mentors</Link>
        <Link href="/dashboard/mentees" className="block hover:text-[#dd9933]">Mentees</Link>
        <Link href="/dashboard/applications" className="block hover:text-[#dd9933]">Applications</Link>
      </nav>
    </aside>
  );
}
