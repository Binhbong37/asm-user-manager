import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
const PageNum = ({ setPage, page }) => {
    const TOTAL_PAGE = Array.from(Array(10).keys());

    const handlePage = (pages) => {
        setPage(pages);
    };
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-lg">
                {!(page === 1) && (
                    <li className="page-item" onClick={setPage(page - 1)}>
                        <a
                            className="page-link"
                            href="/#"
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">
                                <HiChevronDoubleLeft />
                            </span>
                        </a>
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
                {!(page === 10) && (
                    <li className="page-item" onClick={setPage(page + 1)}>
                        <a className="page-link" href="/#" aria-label="Next">
                            <span aria-hidden="true">
                                <HiChevronDoubleRight />
                            </span>
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default PageNum;
