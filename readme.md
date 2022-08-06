# Link-Previewer API 

Link-Previewer API  is a API that provides metadata eg: Title, Thumbnail/Favicon, Description of a given  URL.

# Tech Stack
   
    Express.js
    Cheerio

# Setting Up

- Fork the repo to your account.
- Clone the repo to your local computer `git clone <fork url>`
- Make sure Node js is installed on your machine.
- cd into the project directory and run `npm install`
- Now run `nodemon server`
- Open [http://localhost:8000](http://localhost:8000) on a browser.

# End Point
   
    https://link-pre-viewer.herokuapp.com/api/v1
    

# Usage
 Make a post request on the endpoint `https://link-pre-viewer.herokuapp.com/api/v1` with  `url` in the `body` of the request.

# Sample Success Response
   
    {
       success: true,
       data: {
       title: "title of the given url"
       image: "image of the given url"
       favicon: "favicon of the given url"
       url: "the given url itself"
       }
    }
    
    
# Dempo App

-  [Link-pre-viewer](https://expressjs.com/en/5x/api.html).  
# Resources

- To get started with `Express JS` or brush up your skills, check out the official [Express JS Documentation](https://expressjs.com/en/5x/api.html).
- To get started with `Cheerio` or brush up your skills, check out the official [Cheerio Documentation](https://cheerio.js.org).
