import { useNavigate } from "react-router-dom";
import type { User } from "../utils/types/user";


interface UsersTableProps {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const UsersTable = ({ isLoading, isError, isSuccess, users }: UsersTableProps) => {
  const navigate = useNavigate()

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left border-b">Name</th>
          <th className="px-4 py-2 text-left border-b">Email</th>
          <th className="px-4 py-2 text-left border-b">Phone</th>
          <th className="px-4 py-2 text-left border-b">Company</th>
          <th className="px-4 py-2 text-left border-b">Role</th>
        </tr>
      </thead>
      <tbody>
        {isError && (
          <tr>
            <td colSpan={5} className="text-center px-4 py-2">
              Something went wrong
            </td>
          </tr>
        )}
        {isLoading && (
          <tr>
            <td colSpan={5} className="text-center px-4 py-2">
              Loading...
            </td>
          </tr>
        )}
        {isSuccess && users.length === 0 && (
          <tr>
            <td colSpan={5} className="text-center px-4 py-2">
              No users found
            </td>
          </tr>
        )}
        {isSuccess &&
          users.length > 0 &&
          users.map((user) => (
            <tr key={user.id} className="cursor-pointer hover:bg-gray-200" onClick={() => { navigate(`/users/${user.id}`) }}>
              <td className="px-4 py-2 border-b h-20">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-4 py-2 border-b h-20">{user.email}</td>
              <td className="px-4 py-2 border-b h-20">{user.phone}</td>
              <td className="px-4 py-2 border-b h-20">{user.company.name}</td>
              <td className="px-4 py-2 border-b h-20">{user.role}</td>
            </tr>
          ))}
      </tbody>
    </table>)
}

export default UsersTable