import Button from '../Button';
import './Pagination.css';
import PropType from 'prop-types';

function Pagination(props) {
  return (
    <div className="paginationWrapper">
      {[...Array(props.maxPageNumber).keys()].map(x => x + 1).map((pageNumber) => (
        <Button key={'pagination-' + pageNumber} active={props.pageNumber === pageNumber}
          onClick={() => props.onPaginate(pageNumber)} text={pageNumber.toString()} />
      ))}
    </div>
  )
}

Pagination.propTypes = {
  pageNumber: PropType.number,
  maxPageNumber: PropType.number,
}

export default Pagination;
