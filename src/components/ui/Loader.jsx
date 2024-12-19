const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-4">
        <img src="/images/logo/logo.svg" alt="Logo" className="h-20" />
      </div>

      {/* Dots loader */}
      <div className="flex space-x-2">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="h-4 w-4 rounded-full border-2 border-blue-500"
            style={{
              animation: `move 1s ease-in-out ${index * 0.3}s infinite`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
