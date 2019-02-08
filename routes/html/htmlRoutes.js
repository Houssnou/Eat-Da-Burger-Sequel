const router = require("express").Router();
const db=require("../../models");

//routes
router.get("/", (req, res) => {
  res.render("index");
});

router.get("/burgers", (req, res) => {
  db
      .burgers
      .findAll()
      .then(dbBurgers => {
        res.render("burgers",{burgers:dbBurgers});

      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
    
  });

module.exports = router;