const express = require('express');
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + `/IHM/Accueil.html`);
});





app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})