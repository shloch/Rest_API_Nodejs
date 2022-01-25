
   
import React from 'react'
import BookDetails from './BookDetails';
import { useState, useEffect } from 'react';
import baseURL from '../configBaseURL'


function BookList() {
    const [selectedID, setSelectedID] = useState(null);
    const [itemsArr, setItemsArr] = useState([])
  
  useEffect(() => {
    const fetchURL = baseURL + '/articles'
    fetch(fetchURL)
      .then(Response => Response.json())
      .then(apiData => {
        /*this.setState({
          itemsArr: apiData.results
        })*/
          setItemsArr(apiData)
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  }, [])

  return (
      <div>
          <span> list serai laÒ</span>
          {console.log(itemsArr)}
      { <ul id="book-list" >
        {itemsArr.map(({ title, content, id }) => (
          <li key={id} onClick={(e) => { setSelectedID(id) }}>
                <strong> {title} </strong> :<br />
                {content}
          </li>
        ))}
      </ul> }
      {/* <BookDetails bookId={ selectedID }/> */}
    </div>
  )

}

export default BookList;