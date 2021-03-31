import React from 'react'
import { Pagination } from 'semantic-ui-react'

const TablePagination = ({page, pages, action}) => {
  const changePage = (e, { activePage }) => {
    action(activePage)
  }

  return (
      <Pagination
    boundaryRange={0}
    activePage={page}
    ellipsisItem={null}
    siblingRange={1}
    totalPages={pages}
    onPageChange={changePage}
  />
  )

}




export default TablePagination
