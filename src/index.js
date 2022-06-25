/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import ReactDom from 'react-dom'

//CSS
import './index.css';

//stateless functional componnent
function BookList(){
    return (
        <section>
            <Book/>
        </section>
    );
}
//Nested Components
const Book = () => {
    return <article>
        <Image/>
        <Title/>
        <Author/>
    </article>
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71Mx-bE91+L._AC_UL604_SR604,400_.jpg" alt=""/>
const Title = () => <h1>Its not summer without you</h1>
const Author = () => <h4>Jenny Han</h4>
ReactDom.render(<BookList/>,document.getElementById('root'))