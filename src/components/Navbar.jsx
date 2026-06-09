import Cart from './Cart';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-rose-400 to-orange-300 flex items-center justify-center text-white font-bold">
            TH
          </div>
          <div className="flex flex-col">
            <a
              href="#"
              className="text-xl font-semibold text-slate-900 tracking-tight"
            >
              TechHub
            </a>
            <span className="text-xs text-slate-500">
              Gear for builders & dreamers
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-slate-700 hover:text-slate-900">
            Products
          </a>
          <a href="#" className="text-slate-700 hover:text-slate-900">
            About
          </a>
          <a href="#" className="text-slate-700 hover:text-slate-900">
            Support
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Search />
          <Cart />
        </div>
      </div>
    </nav>
  );
}
