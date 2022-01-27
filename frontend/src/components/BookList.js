
   
import React from 'react'
import BookDetails from './BookDetails';
import { useState, useEffect } from 'react';
import baseURL from '../configBaseURL'


function BookList() {
    const [selectedID, setSelectedID] = useState(null);
    const [itemsArr, setItemsArr] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(null)

  
    useEffect(() => {
        refresh()
    }, [itemsArr]);

    const refresh = () => {
        const fetchURL = baseURL + '/articles'
        fetch(fetchURL)
            .then(Response => Response.json())
            .then(apiData => {
                setItemsArr(apiData)
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleRemoveItem = (deleteID) => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer my-token',
                'My-Custom-Header': 'foobar'
            }
        };
        fetch(baseURL + '/article/' + deleteID, requestOptions)
            .then(() => setDeleteStatus('Delete successful'));
        setSelectedID(null);
        refresh();
     
    };

  return (
    <div>
          {/* {deleteStatus && (<h2> {window.alert("Supprimé avec succès")}</h2>)} */}
        <ul id="book-list" >
            {(itemsArr.length > 0) && itemsArr.map(({ title, content, _id }) => (

            <li key={_id} onClick={(e) => { setSelectedID(_id) }}>
                    <strong> {title.slice(0, 25) } </strong> :<br />
                    {content.slice(0, 15) + '...'}
            </li>
            ))}
        </ul> 
        {
              selectedID && <BookDetails articleId={selectedID} handleRemoveItem={handleRemoveItem} />
        }
        
    </div>
  )

}

export default BookList;