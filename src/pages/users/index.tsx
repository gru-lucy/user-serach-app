import { useState, useCallback, useMemo, useEffect } from "react";
import { useGetUsersQuery } from "../../slices/userSlice";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const skip = useMemo(() => (page - 1) * pageSize, [page, pageSize]);

  const { data, isError, isLoading, isSuccess } = useGetUsersQuery({
    search: debouncedSearchTerm,
    limit: pageSize,
    skip,
  });

  const users = data?.users || [];
  const totalUsers = data?.total || 0;
  const totalPages = useMemo(() => Math.ceil(totalUsers / pageSize), [totalUsers, pageSize]);

  const handleNextPage = useCallback(() => {
    if (page < totalPages) setPage((prevPage) => prevPage + 1);
  }, [page, totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  }, [page]);

  useEffect(() => {
    setPage(1)
  }, [debouncedSearchTerm])
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>

      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto">
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
                <tr key={user.id} className="cursor-pointer hover:bg-gray-200" onClick={() => {navigate(`/users/${user.id}`)}}>
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
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          className={`p-2 ${page === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-500"}`}
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className={`p-2 ${page === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blue-500"}`}
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
