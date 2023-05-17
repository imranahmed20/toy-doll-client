import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='card p-4 mt-5'>
                <h3 className='fw-bold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='fw-semibold'>Access Token: An access token is a credential that is granted to a client (such as a user or an application) by an authentication server. It represents the authorization to access specific resources or perform certain actions on behalf of the client. The access token is usually issued after the client successfully authenticates with the server using their credentials (e.g., username and password) or through other authentication mechanisms like OAuth.
                    <br />
                    Refresh Token: A refresh token is a credential that is also issued by the authentication server, usually alongside an access token. Unlike an access token, the refresh token is used specifically for obtaining a new access token without requiring the client to re-authenticate with the server. It has a longer expiration time compared to the access token. <br />It seems like you're asking about how certain features or functionalities work on the client-side of a web application and where to store related data. Could you please clarify which specific features or functionalities you're referring to? This will help me provide you with more accurate information. </p>
            </div>
            <div className='card p-4 mt-5'>
                <h3 className='fw-bold'>2. Compare SQL and NoSQL databases?</h3>
                <p className='fw-semibold'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
            </div>
            <div className='card p-4 mt-5'>
                <h3 className='fw-bold'>3.What is express js? What is Nest JS?</h3>
                <p className='fw-semibold'>NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications</p>
            </div>
            <div className='card p-4 mt-5'>
                <h3 className='fw-bold'>4. What is MongoDB aggregate and how does it work?</h3>
                <p className='fw-semibold'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. </p>
            </div>
        </Container>
    );
};

export default Blog;