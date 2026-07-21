function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold">
          🤖 AI Code Review Platform
        </h1>

        <span className="bg-blue-600 px-4 py-2 rounded-lg font-medium">
          Version 3.0
        </span>
      </div>
    </header>
  );
}

export default Header;