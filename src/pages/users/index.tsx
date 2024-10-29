import { useState, useCallback, useMemo, useEffect } from "react";
import { useGetUsersQuery } from "../../slices/userSlice";
import useDebounce from "../../hooks/useDebounce";
import UsersTable from "../../components/UsersTable";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";

const Users = () => {
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

      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users by email..."
      />

      <div className="overflow-x-auto">
        <UsersTable isError={isError} isLoading={isLoading} isSuccess={isSuccess} users={users}></UsersTable>
      </div>
      <Pagination page={page} totalPages={totalPages} onNext={handleNextPage} onPrevious={handlePreviousPage}></Pagination>
    </div>
  );
};

export default Users;
