import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {listItems: todoList});
});
const todoList = []
  
app.post("/", (req, res) => {
  const newTask = req.body["listAdd"]
  todoList.push(newTask)
  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
