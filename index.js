const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + `/IHM/Accueil.html`);
});

app.get("/accueil", (req, res) => {
  res.sendFile(__dirname + `/IHM/Accueil.html`);
});

app.get("/profil", (req, res) => {
  res.sendFile(__dirname + `/IHM/Profil.html`);
});




app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})