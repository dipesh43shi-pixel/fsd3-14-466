# NPM Project

1. create project folder 
2. right click on project folder and select open  in integrated terminal or we can use cd.. to exit from any folder 
3. type in terminal `npm init -y` press enter 
4. open package.json file from project folder  
5. update type as `module` in package.json
6. type in terminal `npm i nodemon -D` to install nodemon, which restarts server while file changes 
 -D flag indicates install in dev dependency 
 7. it creates node_modules folder and package-lock.json
 8. update .gitignore file and write and write project-folder/node_modules
 9. update package.json to run the project , update script property as below :
 remove the test line in that n wwrite :
 "script": {
    "start":"node app.js",
    "dev" : "nodemon app.js"
 },
 10. now you can start the server by typing `npm run dev` in the terminal of project folder 