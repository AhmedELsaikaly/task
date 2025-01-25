import {useState, useMemo} from 'react';

export const usePagination = <T>(data: T[], itemsPerPage: number = 12) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startRange = (currentPage - 1) * itemsPerPage + 1;
  const endRange = Math.min(currentPage * itemsPerPage, data.length);

  const currentData = useMemo(() => {
    return data && data.slice(startRange - 1, endRange);
  }, [currentPage, data]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentData,
    currentPage,
    startRange,
    endRange,
    totalItems: data.length,
    handlePageChange,
    totalPages: Math.ceil(data.length / itemsPerPage),
    itemsPerPage,
  };
};
