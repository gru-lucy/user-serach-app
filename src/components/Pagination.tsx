
interface PaginationProps {
  page: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}
const Pagination = ({ page, totalPages, onPrevious, onNext }: PaginationProps) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button
        className={`p-2 ${page === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-500"}`}
        onClick={onPrevious}
        disabled={page === 1}
      >
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        className={`p-2 ${page === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blue-500"}`}
        onClick={onNext}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
