const db = require("../models");

module.exports = {
  //select all burgers
  getAllBurgers: (req, res) => {
    db
      .burgers
      .findAll()
      .then(dbBurgers => {
        res.json(dbBurgers);

      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },

  //add a burger
  addBurger: (req, res) => {
    db.burgers.create({
        name: req.body.name
      }).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Select All Error: " + err);
        res.status(400).json(err);
      });
  },

  //update a buger /:id
  updateBuger: (req, res) => {
    console.log(req.body);

    db.burgers.update({
        devoured: req.body.devoured
      }, {
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Update Error: " + err);
        res.status(400).json(err);
      });

  },

  //delete a burger
  deleteBurger: (req, res) => {
    db.burgers.destroy({
        where: {
          id: req.params.id
        }
      }).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log("Delete Erro: " + err);
        res.status(400).json(err);
      });

  },
  //delete Aallr
  deleteAll: (req, res) => {    
    db.burgers.destroy({
      where: {
       //left intenttionaly blank to delete all
      }
    }).then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log("Delete Erro: " + err);
      res.status(400).json(err);
    });
  },
  //Reset All
  resetAll: (req, res) => {
    db.burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        //left intenttionally blank to update all
      }
    }).then(result => {
      res.json(result)
    })
    .catch(err => {
      console.log("Update Error: " + err);
      res.status(400).json(err);
    });
  } 
}