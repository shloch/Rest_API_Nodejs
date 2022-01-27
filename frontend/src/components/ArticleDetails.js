import React, { useState, useEffect } from 'react'
import baseURL from '../configBaseURL'
//import { useNavigate } from "react-router-dom";


function BookDetails(props) {
    const [article, setArticle] = useState(null)
    const {articleId, handleRemoveItem} = props

    useEffect(() => {
        const fetchURL = baseURL + `/article/${props.articleId}`
        articleId && fetch(fetchURL)
            .then(Response => Response.json())
            .then(apiData => {
                setArticle(apiData);
            })
            .catch(e => {
                console.log(e);
                return e;
            });
            return () => {
                setArticle(null)
            }
    
    }, [articleId]);

    return (
        <div id="book-details">        
            {
                (article && articleId) ? (
                    <div>
                        <button onClick={() => handleRemoveItem(articleId)}>
                            Delete
                        </button>
                        <h2> {article.title} </h2>
                        <p> <em>{article.content}</em> </p>
                        
                    </div>
                ) : (
                    <div> Pas d'article selectionné<br/><br/><br/></div> 
                )
            }
        </div>
    )

}

export default (BookDetails);