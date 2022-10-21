const express = require('express')
const router = express.Router()



router.get("/", (req, res) => {
    res.render(`Accueil`, {name:'ValNas'});
});


module.exports = router;