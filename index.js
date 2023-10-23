// import bodyParser from "body-parser";
import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

// app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//List Management ---------------------------
let items = [
  { text: "Item 1", checked: false },
  { text: "Item 2", checked: false },
];

app.get("/", (req, res) => {
  res.render("index", { items });
});

app.post("/add", (req, res) => {
  let newText = req.body.newItem;
  let newItem = { text: newText, checked: false };
  items.push(newItem);
  res.redirect("/");
});

app.post("/remove", (req, res) => {
  let itemIndex = req.body.index;
  items.splice(itemIndex, 1);
  res.redirect("/");
});

app.post("/toggleCheck", (req, res) => {
  let itemIndex = req.body.index;
  items[itemIndex].checked = !items[itemIndex].checked;
  res.redirect("/");
  console.log(items);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
