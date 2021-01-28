import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="container-center">
            <h1>Error 404</h1>
            <h4>Page isn't exist</h4>
            <Link to="/" className="btn">Back to home page</Link>
        </div>
    )
}

export default ErrorPage
