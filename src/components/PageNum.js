import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useState } from 'react';
const PageNum = () => {
    const TOTAL_PAGE = Array.from(Array(10).keys());
    const [currentPage, setCurrentPage] = useState(1);
    const handlePage = (page) => {
        setCurrentPage(page);
    };
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg">
                <li className="page-item">
                    <a className="page-link" href="/#" aria-label="Previous">
                        <span aria-hidden="true">
                            <HiChevronDoubleLeft />
                        </span>
                    </a>
                </li>
                {TOTAL_PAGE.map((page, index) => {
                    return (
                        <li
                            key={index}
                            className={`page-item ${
                                page + 1 === currentPage ? 'active' : ''
                            }`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handlePage(index + 1)}
                        >
                            <span className="page-link">{page + 1}</span>
                        </li>
                    );
                })}
                <li className="page-item">
                    <a className="page-link" href="/#" aria-label="Next">
                        <span aria-hidden="true">
                            <HiChevronDoubleRight />
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default PageNum;
