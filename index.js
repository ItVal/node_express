const express = require('express');
const app = express();
const port = 8000;
app.set('view engine', 'ejs');
app.set("views", "pages");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render(`Accueil`, {name:'ValNas'});
});

app.get("/accueil", (req, res) => {
  res.render(`Accueil`, {name:'ValNas'});
});

app.get("/profil", (req, res) => {
  res.render(`Profil`, {name:'ValNas'});
});
app.get("/erreur", (req, res) => {
  res.render(`erreur`, {name:'ValNas'});
});




app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})