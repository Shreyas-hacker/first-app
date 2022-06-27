/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import ReactDOM from 'react-dom/client'

//CSS
import './index.css';
//setup vars
const books = [
    {
        id:1,
        img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg",
        title: "I Love You to the Moon and Back",
        author: "Amelia Hepworth"
    },
    {
        id:2,
        img:"https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL604_SR604,400_.jpg",
        title: 'The Subtle Art of Not Giving A Fuck',
        author: 'Mark Manson'
    }
];

//stateless functional componnent
function BookList(){
    return (
        <section className="bookList">
            {books.map((book)=>{
                return <Book key={book.id} book={book}/>
            })}
        </section>
    );
}
//Nested Components
const Book = (props) => {
    const {img,title,author} = props.book
    return (
        <article className="book">
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <h4>{author.toUpperCase()}</h4>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)