# XMEME - REACT APP 

Built an amazing Meme Stream Application where users can post memes by providing their name, a caption for the meme, URL for the meme image as input and the tags.
The page is retrieving and displaying the latest 100 posted Memes (names + caption +tags+meme images). Also users can edit ,like and delete meme.
Link to hosted application:
https://meme-stream-by-yogita.netlify.app
## Getting Started
MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.<br/>
I used MERN stack to develope this application. <br/>
 Flow :
1. The user views the React web app with a browser.
2. With both components written in Node.js, the React front end communicates with the Express back end via RESTful APIs.
3. The back-end Express application uses the Mongo database for storing and retrieving data.
4. Back-end results are communicated back to the the front end.
5. Front-end results are rendered in a human readable format to the user.

### Prerequisites
* [Vscode](https://code.visualstudio.com/docs) 
* [MONGODB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
* [NODE](https://nodejs.org/en/download/)
* [npm](https://nodejs.org/en/download/package-manager/)

### Installing
Front-End - React + Redux <br/>
Back-End - Node.js, Express.js & MongoDB 
* Clone or download <br/>
        git clone https://gitlab.crio.do/COHORT_ME_BUILDOUT_XMEME_ENROLL_1612436694845/yogitamisal12-me_buildout_xmeme.git <br/>
        cd yogitamisal12-me_buildout_xmeme    <br/>
        npm i
* project structure <br/>
    <pre>
    package.json
    server/
        package.json 
    client/         
        package.json  
   </pre>

* Client-side usage(PORT: 3000)
  <pre>
     $ cd client   // go to client folder
     $ npm i       // npm install pacakges
     $ npm start // run it locally
  </pre>
* Server-side usage(PORT: 8081)
    <pre>
      $ cd server   // go to server folder
      $ npm i       // npm install pacakges
      $ npm start // run it locally
    </pre>


## Output
![Screenshot__73_](/uploads/d0d7e13f8e422005be353b44159db107/Screenshot__73_.png)



## Deployment

Deploy Server to [Heroku](https://id.heroku.com/login)
<pre>
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm start heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/mern
$ npm start deploy:heroku
</pre>
Deploy client to [Netlify](https://app.netlify.com/?_ga=2.163889273.750743403.1613204695-17519724.1613204695)
<pre>
$ npm start build // this will compile the react code using webpack and generate a folder called build in the root level
$ npm start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
</pre>
## Built With
* [Material UI](https://material-ui.com/)  -Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications.
 If you want to learn more about it click [here](https://github.com/mui-org/material-ui)

