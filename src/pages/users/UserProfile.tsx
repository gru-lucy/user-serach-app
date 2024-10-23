import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../slices/userSlice";
import Error from "../Error";
import Loading from "../Loading";


const UserProfile = () => {
  const { userId = "" } = useParams<{ userId: string }>(); 
  const { data: user, isError, isLoading, isSuccess } = useGetUserQuery(userId);
  if (isError) {
    return <Error />
  }
  if (isLoading) {
    return <Loading />
  }
  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg"
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-4xl font-bold text-gray-800">{`${user.firstName} ${user.lastName}`}</h1>
            <p className="text-lg text-indigo-600">{user.role}</p>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
            <p className="text-gray-500">{user.birthDate}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-600">Username</h3>
              <p className="text-gray-500">{user.username}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-600">Blood Group</h3>
              <p className="text-gray-500">{user.bloodGroup}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-600">Height</h3>
              <p className="text-gray-500">{user.height} cm</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-600">Weight</h3>
              <p className="text-gray-500">{user.weight} kg</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-600">Eye Color</h3>
              <p className="text-gray-500">{user.eyeColor}</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-600">Hair</h3>
              <p className="text-gray-500">{`${user.hair.color} - ${user.hair.type}`}</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Address</h2>
          <p className="text-gray-500">
            {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}, {user.address.country}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Company</h2>
          <p className="text-gray-500">
            {user.company.name} - {user.company.title}
          </p>
        </div>
      </div>
    );
  }
};

export default UserProfile;
