import React from 'react';
import  { Link } from 'react-router-dom';


const Pagination =  ({page,totalPage}) => {

    let paging = [];
    let x;
    if(totalPage > 1){   
        paging.push(0);     
        for(x=1;x<=totalPage;x++){
            paging.push(x);
        }
        paging.push(totalPage+1);
    }

    return(
        totalPage > 1 ? 
            (<nav aria-label="Page navigation" className="mb-5 mt-3">
                <ul className="pagination">
                    {paging.map((key,i) =>
                        key === 0 ? (page == 1 ? <li key={i}  className="page-item disabled"><Link to={{ pathname: '/', state: { page } }} className="page-link disabled" >Previous</Link></li> : <li key={i} className="page-item"><Link to={{ pathname: '/', state: { 'page':page-1 } }} className="page-link" >Previous</Link></li>)
                        : ( key === paging.length-1 ?
                            (page == totalPage ? <li key={i} className="page-item disabled"><Link to={{ pathname: '/', state: { page } }} className="page-link" >Next</Link></li> : <li key={i} className="page-item"><Link to={{ pathname: '/', state: { 'page':page+1 } }} className="page-link" >Next</Link></li>)
                        : (page == key ? <li key={i} className="page-item active"><Link to={{ pathname: '/', state: { 'page':parseInt(key) } }} className="page-link" >{key}</Link></li> : <li key={i} className="page-item"><Link to={{ pathname: '/', state: { 'page':parseInt(key) } }} className="page-link" >{key}</Link></li>)
                        )
                    )}
                </ul>
            </nav>)
            : (<div></div>)
    )
};

export default Pagination;