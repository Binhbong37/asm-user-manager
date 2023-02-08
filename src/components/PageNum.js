import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

const TOTAL_PAGE = Array.from(Array(10).keys());
const PageNum = ({ setPage, page }) => {
    const isFirstPage = page === 1;
    const isLastPage = page === 10;

    const handlePage = (p) => {
        setPage(p);
    };
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg">
                {!isFirstPage && (
                    <li className="page-item" onClick={() => setPage(page - 1)}>
                        <span className="page-link">
                            <HiChevronDoubleLeft />
                        </span>
                    </li>
                )}
                {TOTAL_PAGE.map((pag, index) => {
                    return (
                        <li
                            key={index}
                            className={`page-item ${
                                pag + 1 === page ? 'active' : ''
                            }`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handlePage(index + 1)}
                        >
                            <span className="page-link">{pag + 1}</span>
                        </li>
                    );
                })}
                {!isLastPage && (
                    <li className="page-item" onClick={() => setPage(page + 1)}>
                        <span className="page-link">
                            <HiChevronDoubleRight />
                        </span>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default PageNum;
