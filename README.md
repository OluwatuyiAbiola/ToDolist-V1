
## ToDoLIST 

This project is web app used to add items for us to do later

### TOOLS

- Node.js
- Express
- BodyParser
- EJS (Embedded Javascript Template)

#### KEY POINTS

- npm init folder
- npm i express body-parser ejs
- require express and body-parser
- listen to create the local server
- get the home route for response and request
- use body-parser to grab data from the webpage form
- set view engine as ejs
- create a folder called views 
- create a list.ejs file in views folder
- Ejs file is to perform programming logic on the webpage
- res.render("list", {Var: VAR, Var2: VAR2}) to render changes on the ejs file
- Ejs uses <% %> syntax for any programming language on the web & <%=Var %> for an input
- create a today object that finds the date of the present day (new Date())
- options for the type of date format
- toLocaleDatestring(en-US(language), options)
- rendered on the list.ejs
- form on the list.ejs with post method and home route
- post method to get requested input 
- created an items array to store todos
- stored d input on the item and pushed it to d items array
- rendered it back to the list.ejs
- post method to redirect back to d get route
- on the list.ejs ran a for loop for d addition of items in a column format and not row
- Added the css stylesheet in a created public/css folder
- use express.static("public") to access static files(img, css, sound) on the server

- work on another route with a different todo list title work list
- get a work route rendering list and listTile="Work list" newListItems=workItem
- created the workitem array to store the new list of todos
- workitem to store the new item using push
- post the pushed item back to the /work route
- ERROR occurred : it added the new item to the home route list (items array)
- a condition was added to check if the list title is work or day
- so on the list.ejs d buttons name is list and value <% listTitle
- if d name: list as a value of work it will push the item on the workitems array and redirected to the /work route

##### Layouts:
- Worked with creating more ejs pages for the Project
- Ejs allows layouts or partials
- We can create multiple pages with the same info and diff changes
- Created a header and footer ejs to store d header to 1st body tag
- Footer to store 2nd body tag to footer
- Included it on the list.ejs using <%- include([filename])

- Another ejs file for about
- get the /about route

###### Modules
- We moved the day to a new module called date
- required date on app.js
- used exports.getDate = func() to use the func with a return value
- date is bound to export date module and exports of date module is a func
- adding () to our exports runs the func automatically 



[P.S] found the project very confusing

