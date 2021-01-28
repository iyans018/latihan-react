import React from 'react'

// CSS
import './BookList.css'

function Lists() {
    return (
        <>
            <Title />
            <BookList />
        </>
    )
}

const Title = () => <h1 className="title">Books List</h1>

// PROPER LIS
const Books = [
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UY218_.jpg',
        title: 'A Promised Land',
        author: 'Barack Obama',
        price: 17.99
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/I/91AQs6qv9ML._AC_UY218_.jpg',
        title: 'Untamed',
        author: 'Glennon Doyle',
        price: 14.99
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/81LYYbsEPeL._AC_UY218_.jpg',
        title: 'The Vanishing Half: A Novel',
        author: 'Brit Bennett',
        price: 16.78
    },
    {
        id: 4,
        img: 'https://m.media-amazon.com/images/I/81yvpZDOgkL._AC_UY218_.jpg',
        title: 'Anxious People: A Novel',
        author: 'Fredrik Backman',
        price: 14.02
    },
    {
        id: 5,
        img: 'https://images-na.ssl-images-amazon.com/images/I/41aM4xOZxaL._AC_SX184_.jpg',
        title: '1984',
        author: 'George Orwell',
        price: 11.98
    }
];

function BookList() {
    return (
        <section className="booklist">
           {Books.map((book) => {
               return <Book key={book.id} buku={book} />
           })}
        </section>
    )
}

function Book(props) {
    const { img, title, author, price } = props.buku
    return (
        <article className="book">
            <img className="book-image" src={img} alt="book-image"/>
            <p className="book-title">{title}</p>
            <small className="book-author">{author}</small>
            <p className="book-price">${price}</p>
            <input className="book-detail" type="button" value="View Detail"/>
        </article>
    )
}



// PROPS
// function BookList() {
//     return (
//         <section className="booklist">
//             <Book 
//                 img="https://m.media-amazon.com/images/I/91uwocAMtSL._AC_UY218_.jpg" 
//                 title="A Promised Land" 
//                 author="Barack Obama" 
//                 price={17.99}
//             />
//             <Book 
//                 img="https://m.media-amazon.com/images/I/91AQs6qv9ML._AC_UY218_.jpg" 
//                 title="Untamed" 
//                 author="Glennon Doyle" 
//                 price={14.99}
//             />
//             <Book 
//                 img="https://m.media-amazon.com/images/I/81LYYbsEPeL._AC_UY218_.jpg"
//                 title="The Vanishing Half: A Novel"
//                 author="Brit Bennett"
//                 price={16.78}
//             />
//             <Book 
//                 img="https://m.media-amazon.com/images/I/81yvpZDOgkL._AC_UY218_.jpg" 
//                 title="Anxious People: A Novel" 
//                 author="Fredrik Backman"
//                 price={14.02}
//             />
//         </section>
//     )
// }

// function Book(props) {
//     const { img, title, author, price } = props
//     return (
//         <article className="book">
//             <img className="book-image" src={img} alt="book-image"/>
//             <p className="book-title">{title}</p>
//             <small className="book-author">{author.toUpperCase()}</small>
//             <p className="book-price">${price}</p>
//         </article>
//     )
// }

// NESTED COMPONENT
// function Book() {
//     return (
//         <article className="book">
//             <BookImage />
//             <BookTitle />
//             <BookAuthor />
//             <BookPrice />
//         </article>
//     )
// }

// const BookImage = () => <img className="book-image" src="https://images-na.ssl-images-amazon.com/images/I/51wrCHw9hiL._AC_SX184_.jpg" alt="book-image"/>

// const BookTitle = () => (
//     <p 
//         style={{fontSize: '20px', padding: '0.5rem', textAlign: 'center'}} 
//         className="book-title"
//     >
//         This is a book title
//     </p>
// )

// const BookAuthor = () => (
//     <small 
//         style={{display: 'block', fontSize: '14px', padding: '0.5rem', color: 'gray', textAlign: 'center'}}
//         className="book-author"
//     >
//         This is an Author
//     </small>
// )

// const BookPrice = () => (
//     <p
//         style={{fontSize: '24px', padding: '0.5rem', textAlign: }}
//         className="book-price"
//     >
//         <b>$00.00</b>
//     </p>
// )

export default Lists
