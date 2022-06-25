/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import ReactDom from 'react-dom'

//CSS
import './index.css';

//stateless functional componnent
function BookList(){
    return (
        <section className="bookList">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
}
//Nested Components
const Book = () => {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL302_SR302,200_.jpg" alt=""/>
const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>Amelia Hepworth</h4>
ReactDom.render(<BookList/>,document.getElementById('root'))