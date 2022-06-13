import {useState} from 'react';

function usePagination(data, itemsPerPage) {
  const [currentPage2, setCurrentPage2] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage2 - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage2((currentPage2) => Math.min(currentPage2 + 1, maxPage));
  }

  function prev() {
    setCurrentPage2((currentPage2) => Math.max(currentPage2 - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage2((currentPage2) => Math.min(pageNumber, maxPage));
  }

  return {next, prev, jump, currentData, currentPage2, maxPage};
}

export default usePagination;
