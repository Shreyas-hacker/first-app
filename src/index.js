/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import ReactDom from 'react-dom'

//CSS
import './index.css';
//setup vars
const books = [
    {
        img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg",
        title: "I Love You to the Moon and Back",
        author: "Amelia Hepworth"
    },
    {
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
                return <Book img={book.img} title={book.title} author={book.author}/>
            })}
        </section>
    );
}
//Nested Components
const Book = (props) => {
    return (
        <article className="book">
            <img src={props.img} alt=""/>
            <h1>{props.title}</h1>
            <h4>{props.author.toUpperCase()}</h4>
        </article>
    );
}

ReactDom.render(<BookList/>,document.getElementById('root'))