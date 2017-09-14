import express from 'express'
import Promise from 'bluebird'
import db from 'sqlite'
import swapi from 'swapi-node'

const app = express()
// const router = express.Router();
const request = require('request');

const port = process.env.PORT || 3003

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/starships/charge', async (req, res, next) => {
  // const columns = ["MGLT", "cargo_capacity", "consumables", "cost_in_credits", "created", "crew", "edited", "hyperdrive_rating", "length", "manufacturer", "max_atmosphering_speed", "model", "name", "passengers", "films", "pilots", "starship_class", "url"]
  const columns = ["cargo_capacity", "manufacturer", "max_atmosphering_speed", "model", "name", "passengers", "starship_class", "url"]
  const count_columns = columns.length;
  swapi.get('http://swapi.co/api/starships/').then((result) => {
      var starships_result = result.results
      var data = []
      for (var i = 0, total = 10; i < total; i++) {
        var data_column = []
        for (var j = 0; j < count_columns; j++) {
          data_column.push(starships_result[i][columns[j]])
        }
        data.push(data_column)
        db.run("INSERT OR IGNORE INTO Starships (" + columns.join(',') + ") VALUES (" + Array(count_columns+1).join('?,').slice(0,-1) + ")", data[i])
      }
      return true
  }).catch((err) => {
      console.error(err);
  });
})

app.get('/starships', async (req, res, next) => {
  try {
    const starships = await db.all('SELECT * FROM Starships')
    res.send(starships)
  } catch (err) {
    next(err)
  }
})

app.get('/starships/:id', async (req, res, next) => {
  try {
    const [starships_detail] = await Promise.all(
      db.get('SELECT * FROM Starships WHERE id = ?', req.params.id)
    )
    res.render('starships', { starships_detail })
  } catch (err) {
    next(err)
  }
})

app.delete('/starships/delete/:id', async (req, res, next) => {
  try {
    db.run('DELETE FROM Starships WHERE id = (?)', req.params.id)
    const starships = await db.all('SELECT * FROM Starships')
    res.send(starships)
  } catch (err) {
    next(err)
  }
})

Promise.resolve()
  .then(() => db.open('./database.sqlite', { Promise }))
  // .then(() => db.migrate({ force: 'last' }))
  .catch(err => console.error(err.stack))
  .finally(() => app.listen(port))