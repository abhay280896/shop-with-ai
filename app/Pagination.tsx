"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const limitOptions = [10, 20, 30, 40, 50, 100];

type propsType = {
  total: number;
  isLoading: boolean;
  onPaginationChange: (skip: number, limit: number) => Promise<boolean>;
};

const Pagination = ({ total, isLoading, onPaginationChange }: propsType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  console.log("currentPage", currentPage);

  const totalPages = Math.ceil(total / limit);
  const pageArr = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePagination = async (targetPage: number) => {
    console.log("handlePagination", targetPage, targetPage * limit);
    const skip = (targetPage - 1) * limit;
    const updatePaginationstates: boolean = await onPaginationChange(
      skip,
      limit,
    );
    if (updatePaginationstates) {
      setCurrentPage(targetPage);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locaLimit = Number(e.target.value);
    const updatePaginationstates: boolean = await onPaginationChange(
      0,
      locaLimit,
    );
    if (updatePaginationstates) {
      setLimit(locaLimit);
      setCurrentPage(1);
    }
  };

  return (
    <>
      <select
        className="bg-black text-white border border-white rounded px-2 py-1 my-1.5"
        onChange={(e) => handleChange(e)}
        value={limit}
      >
        {limitOptions.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <div className="flex">
        <button
          className="bg-white text-black w-6.25 h-6.25 mx-0.5 text-center text-sm/6 cursor-pointer disabled:cursor-no-drop disabled:bg-gray-600"
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage <= 1 || isLoading}
        >
          <ChevronLeft />
        </button>
        {pageArr.map((i) => (
          <button
            disabled={isLoading}
            key={i}
            className={`w-6.25 h-6.25 mx-0.5 text-center text-sm/6 cursor-pointer disabled:cursor-no-drop disabled:bg-gray-600 ${currentPage === i ? `bg-purple-700 text-white ` : `bg-white text-black`}`}
            onClick={() => {
              handlePagination(i);
            }}
          >
            {i}
          </button>
        ))}
        <button
          className="bg-white text-black w-6.25 h-6.25 mx-0.5 text-center text-sm/6 cursor-pointer disabled:cursor-no-drop disabled:bg-gray-600"
          onClick={() => handlePagination(currentPage + 1)}
          disabled={currentPage >= totalPages || isLoading}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
