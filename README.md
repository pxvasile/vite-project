# WOODWORLD

WOODWORLD project is a web aplication for small caprenter company that presents itself, ts products and skills. It is an web application(Single Page Application) using React.js.

## Table of Contents

 - [Project intention](#project-intention)

 - [Application Structure](#Application-Structure)
    - [Public Part (Accessible without authentication)](#public-part)
    - [Private Part (Available for Registered Users)](#private-part)
 - [General functionality](#general-functionality)
    

##  Project intention
   ### The application have:

- Public Part (Accessible without authentication)
    - The public part of project is visible without authentication. This public part is start page, catalog page, the user login and user registration forms, search bar and etc.

- Private Part (Available for Registered Users)
    - Registered users have a personal area in the web application accessible after successful login. This area contains the user's profiles management functionality, the user's offers in a bid system, the user's posts in comments, the user's photos in a photo-sharing system, the user's contacts in a social network, etc.

## General functionality

Web application uses the following technologies, frameworks, and development techniques:
- At least 3 different dynamic pages (pages like home, about, contacts, etc.)
- Have specific views:
    - Catalog – list of all created products
    - Details – information about a specific product

- One collection, different from the User collection, with all CRUD operations (create, read, update, delete)
    - Logged in users – you can create records and request to the REST API, interaction with the records (via Comments, etc.)
    - Logged in (author) – you can Edit / Delete their records

- A Guest have access to basic website information (catalog, details), but not to the functional activities

- Using React.js for the client-side

- Communicating to a remote service (via REST or a similar client-server technique)

- Implement authentication

- Implement client-side routing

- Demonstrating use of programming concepts, specific to the React library: stateless and state full components, bound forms, synthetic events, Component Styling, etc.

- Using a source control system - `GitHub`

- Using error handling and data validation to avoid crashes when invalid data is entered

- The application is divided into components with separate CSS files

- Using of programming concepts - React Hooks, Context API

- Demonstrating use of programming concepts, specific to the React library: stateless and state full components, bound forms, synthetic events, Component Styling, etc.

- Using a source control system - `GitHub`
