# JN-Book-Search-Engine


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Links](#links)


## Description

Through this challenge, I was able to refactor a Google Books API search engine so that it uses GraphQL queries and mutatations to fetch and modify data! The starter code that was given was initially created using RESTful API. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. The project was completed by following the acceptance criterias listed below:

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```


## Installation
In order to navigate through the book search engine code, you will need to:

- Install the dependencies in the package.json files by running `npm i` in the integrated terminal <br>
- Run the files by typing `npm run develop` in the root directory of the integrated terminal <br>


## Usage

As a user, you can search for a book by typing any book title in the search bar and clicking the ```Submit Search``` button! You can also create an account by clicking the ```Login/Sign Up``` button. Once you click that button, you can toggle between the login and sign up options. Once you sign up for a new account, it will automatically log you in! When you are logged in, you can save a book by clicking the ```Save This Book!``` button below the book information. 

When you navigate to the ```See Your Books``` page, you will be able to see all of the books that you saved! You can also delete the saved book by clicking ```Delete this Book!```, and it will delete that saved book from your saved books page!

Finally, once you click ```Logout```, it will log you out and bring you to the main page!

You can see how the search engine appears below:

![Screenshot]()


## Credits

Thank you, Chris B, for all your help! 😊👍


## Links

[GitHub Repository](https://github.com/jkimys2/JN-Book-Search-Engine) <br>
[Deployed Page](https://jn-book-search-engine.onrender.com)
