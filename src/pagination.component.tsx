import * as React from "react";

interface Props {
  itemsPerPage: number;
  totalItems: number;
  loadPage: (pageNumber: number) => void;
}

const PaginationComponent = (props: Props) => {
  const pageNumbers = [];
  const [page, setPage] = React.useState(1);

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <a
                onClick={() => {
                  setPage(number);
                  props.loadPage(number);
                }}
                href="!#"
                className="page-link"
              >
                <span className="{page == number ? 'red' : ''}">{number}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;
