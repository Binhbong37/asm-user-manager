import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
let TOTAL_PAGE = 10;
const PageNum = ({ setPage, page }) => {
    const [currentPage, setCurrentPage] = useState(page);
    const numberOfPages = [];
    for (let i = 1; i <= TOTAL_PAGE; i++) {
        numberOfPages.push(i);
    }
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons];

        let dotsInitial = '...';
        let dotsLeft = '... ';
        let dotsRight = ' ...';

        if (numberOfPages.length < 6) {
            tempNumberOfPages = numberOfPages;
        } else if (currentPage >= 1 && currentPage <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
            console.log('elif 1: ', tempNumberOfPages);
        } else if (currentPage === 4) {
            const sliced = numberOfPages.slice(0, 5);
            tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
            console.log('elif 2: ', tempNumberOfPages);
        } else if (currentPage > 4 && currentPage < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentPage - 2, currentPage); // sliced1 (5-2, 5) -> [4,5]
            const sliced2 = numberOfPages.slice(currentPage, currentPage + 1); // sliced1 (5, 5+1) -> [6]
            tempNumberOfPages = [
                1,
                dotsLeft,
                ...sliced1,
                ...sliced2,
                dotsRight,
                numberOfPages.length,
            ];
        } else if (currentPage > numberOfPages.length - 3) {
            // > 7
            const sliced = numberOfPages.slice(numberOfPages.length - 4); // slice(10-4)
            tempNumberOfPages = [1, dotsLeft, ...sliced];
        } else if (currentPage === dotsInitial) {
            console.log(arrOfCurrButtons);
            setCurrentPage(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
        } else if (currentPage === dotsRight) {
            setCurrentPage(arrOfCurrButtons[3] + 2);
        } else if (currentPage === dotsLeft) {
            setCurrentPage(arrOfCurrButtons[3] - 2);
        }

        setArrOfCurrButtons(tempNumberOfPages);
        console.log({ currentPage });
        setPage(currentPage);
        //eslint-disable-next-line
    }, [currentPage]);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {page > 1 && (
                    <li
                        className={`page-item`}
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            setCurrentPage((prev) =>
                                prev <= 1 ? prev : prev - 1
                            )
                        }
                    >
                        <span className="page-link">
                            <HiChevronDoubleLeft />
                        </span>
                    </li>
                )}
                {arrOfCurrButtons.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={`page-item ${
                                page === item ? 'active' : ''
                            }`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => setCurrentPage(item)}
                        >
                            <span className="page-link">{item}</span>
                        </li>
                    );
                })}

                {page < TOTAL_PAGE && (
                    <li
                        className={`page-item`}
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            setCurrentPage((prev) =>
                                prev >= numberOfPages.length ? prev : prev + 1
                            )
                        }
                    >
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
