"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const limitOptions = [10, 20, 30, 40, 50, 100];

type propsType = {
  total: number;
  onPaginationChange: (skip: number, limit: number) => void;
};

const Pagination = ({ total, onPaginationChange }: propsType) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const totalPages = Array.from({ length: Math.floor(total / limit) });

  const onClickPrevious = async () => {
    const nextPrevious = (currentPage - 1) * limit;
    setCurrentPage(currentPage - 1);
    onPaginationChange(nextPrevious, limit);
  };

  const onClickNext = async () => {
    const nextSkip = (currentPage + 1) * limit;
    setCurrentPage(currentPage + 1);
    onPaginationChange(nextSkip, limit);
  };

  const handlePagination = (page: number) => {
    console.log("handlePagination", page, page * limit);
    setCurrentPage(page);
    onPaginationChange(page * limit, limit);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
  };

  return (
    <>
      <select
        className="bg-black text-white border border-white rounded px-2 py-1 my-1.5"
        onChange={(e) => handleChange(e)}
        name=""
        id=""
      >
        {limitOptions.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <div className="flex">
        <button
          className="bg-white text-black w-6.25 h-6.25 mx-0.5 text-center text-sm/6 cursor-pointer"
          onClick={onClickPrevious}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </button>
        {totalPages.map((_, i) => (
          <button
            key={i}
            className={`w-6.25 h-6.25 mx-0.5 text-center text-sm/6 cursor-pointer ${currentPage === i + 1 ? `bg-purple-700 text-white ` : `bg-white text-black`}`}
            onClick={() => {
              handlePagination(i + 1);
            }}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="bg-white text-black w-6.25 h-6.25 mx-0.5 text-center text-sm/6 cursor-pointer"
          onClick={onClickNext}
          disabled={currentPage === totalPages.length}
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
