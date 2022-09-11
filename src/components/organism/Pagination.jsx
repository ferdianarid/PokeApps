import React from "react"

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <React.Fragment>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </React.Fragment>
    )
}

export default Pagination
