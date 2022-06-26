/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import ReactDom from 'react-dom'

//CSS
import './index.css';
//setup vars
const firstBook = {
    img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth"
}

//stateless functional componnent
function BookList(){
    return (
        <section className="bookList">
            <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author}/>
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