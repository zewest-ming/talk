import Link from "next/link";
import { categories } from "@/lib/data";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <div>
              <span className="font-bold text-xl text-emerald-700">HealthyKids</span>
              <span className="hidden sm:block text-xs text-gray-500 leading-none">Trusted parenting & health advice</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="text-sm text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-md transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="md:hidden text-sm text-emerald-700 font-medium"
          >
            Menu
          </Link>
        </div>
        {/* Mobile nav */}
        <div className="md:hidden overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="text-xs text-gray-600 hover:text-emerald-700 bg-gray-100 hover:bg-emerald-50 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
