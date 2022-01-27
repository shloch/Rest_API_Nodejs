import React from 'react'
import { useState } from 'react';
import baseURL from '../configBaseURL'

function AddBook(props) {

    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    
    
    const submitForm= (e) => {
        e.preventDefault();
        const url = baseURL + '/articles'

        const article = {
            "title": `${name}`,
            "content": `${content}`,
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // send POST request
        fetch(url, options)
            .then(res => res.json())
            .then(res => console.log(res));
        
        e.target.name.value = "";
        e.target.content.value = ""
    }
    
    return (
        <form id="add-book" onSubmit={e => { submitForm(e) }}>

            <div className="field">
                <label>Titre:</label>
                <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="Titre de l'article" />
            </div>
        
            <div className="field">
                <label>Contenu:</label>
                <textarea value={content} onChange={e => setContent(e.target.value)} name="content" placeholder="Contenu de l'article" rows={6}/>
            </div>
        
            <button title="Ajouter"> +</button>

        </form>
    )
}

export default AddBook