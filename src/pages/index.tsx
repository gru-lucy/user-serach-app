import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();


  const goToUsersPage = () => {
    navigate('/users');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
      <button
        onClick={goToUsersPage}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Go to Users Page
      </button>
    </div>
  );
};

export default Dashboard;
