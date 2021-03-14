const express = require("express");

//  Initializes environment port and or a static port
const PORT = process.env.PORT || 8080;

const app = express();

//  Serves static files such as images, CSS files, and JavaScript files
app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Imports Handlebars Template Engine
const exphbs = require("express-handlebars");

//  Handlebars Template Engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imports all handling routes from file
const routes = require("./controllers/burgers_controller");

// Uses all handling routes
app.use(routes);

// Used to bind and listen the connections on the specified host and port
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
