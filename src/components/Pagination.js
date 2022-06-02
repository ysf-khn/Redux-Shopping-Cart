const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePagination = (e, number) => {
    e.preventDefault();
    paginate(number);
    window.scrollTo(0, 0);
  };

  return (
    <nav className='m-8 flex justify-center'>
      <ul className='flex justify-center items-center divide-x border-2 rounded-md py-3'>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={(e) => handlePagination(e, number)}
              href='!#'
              className='p-4'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
