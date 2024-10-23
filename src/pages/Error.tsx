const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Something Went Wrong</h1>
        <p className="mt-4 text-lg text-gray-700">We encountered an error while processing your request.</p>
        <p className="mt-2 text-gray-500">Please try again later or contact support.</p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-500 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default Error;
