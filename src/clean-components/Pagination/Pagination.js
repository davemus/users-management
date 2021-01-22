import { connect } from 'react-redux'
import PropType from 'prop-types'
import Button from '../Button'
import './Pagination.css'
import { setPage } from '../../store/pagination'

function Pagination(props) {
  const pageNumbers = [...Array(props.maxPageNumber).keys()].map(x => x + 1)
  return (
    <div className="paginationWrapper">
      {
        pageNumbers.length > 1 && pageNumbers.map((pageNumber) => (
          <Button key={'pagination-' + pageNumber} active={props.pageNumber + 1 === pageNumber}
            onClick={() => props.setPage(pageNumber - 1)} text={pageNumber.toString()} />
        ))}
    </div>
  )
}

Pagination.propTypes = {
  pageNumber: PropType.number,
  maxPageNumber: PropType.number,
}

function mapStateToProps(state) {
  return {
    'pageNumber': state.pagination.page,
  }
}

export default connect(mapStateToProps, { setPage })(Pagination)
