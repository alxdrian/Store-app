import { Link } from "react-router-dom";

export default function Pagination (props) {
  const lastPage = Math.ceil(props.count / props.limit)
  const range = Array.from({length: lastPage}, (x, i) => i + 1).join('-').split('')

  return (
    <div className="pagination">
      {range.map(page => 
        <>
          {page !== '-' && 
            <Link 
              reloadDocument
              key={`page-${page}`} 
              to={`/products/types/search/limit=${props.limit}&offset=${props.limit * (page - 1)}&${props.filters}`}
            >
              <div className="page">
                <p className="content--lg">{page}</p>
              </div>
            </Link>
          }
          {page === '-' && <div className="page-divisor">-</div>}
        </>
        
      )}
    </div>
  )
}