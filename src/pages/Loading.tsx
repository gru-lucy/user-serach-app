const Loading = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-b-4 border-blue-600 rounded-full w-16 h-16 animate-spin"></div>
          <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
      </div>
    );
  };
  
  export default Loading;
  