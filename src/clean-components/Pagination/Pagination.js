import Button from '../Button';
import './Pagination.css';

function Pagination(props) {
  return (
    <div className="paginationWrapper">
      {[...Array(Number(props.maxPageNumber)).keys()].map(x => x + 1).map((pageNumber) => (
        <Button key={'pagination-' + pageNumber} active={props.pageNumber === pageNumber}
          onClick={() => props.onPaginate(pageNumber)} text={pageNumber} />
      ))}
    </div>
  )
}

export default Pagination;
