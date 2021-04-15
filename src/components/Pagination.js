import React from "react"
import {PaginationWrapper, PaginationElement} from "../elements"

export const Pagination = ({isFirst, IsLast, prevPage, nextPage}) => {
    return(
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationElement to={prevPage}>
                Previuos Page
            </PaginationElement>
            <PaginationElement to={nextPage}>
                Next Page
            </PaginationElement>
        </PaginationWrapper>
    )
}
