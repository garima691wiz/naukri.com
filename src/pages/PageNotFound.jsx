function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {/* Logo */}
      <div className="mb-4">
        <img src="/images/logo/logo.svg" alt="Logo" className="h-20" />
      </div>

      <p>Page Not Found!!</p>
      <a
        href="/"
        className="rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
      >
        Go to Home
      </a>
    </div>
  );
}

export default PageNotFound;
