const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());

// Configurer la connexion à la base de données
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
  multipleStatements: true,
});

//Api pour récupérer les équipes
app.get("/api/hat1", (req, res) => {
  db.query(
    "SELECT * FROM equipes WHERE hat = 1 AND playoff IS NULL",
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get("/api/hat2", (req, res) => {
  db.query("SELECT * FROM equipes WHERE hat = 2 ", (err, results) => {
    if (err) throw err;

    res.json(results);
  });
});

app.get("/api/hat3", (req, res) => {
  db.query("SELECT * FROM equipes WHERE hat = 3", (err, results) => {
    if (err) throw err;

    res.json(results);
  });
});

// API pour récupérer des données
app.get("/api/equipes", (req, res) => {
  db.query("SELECT * FROM equipes", (err, results) => {
    if (err) throw err;

    res.json(results);
  });
});

app.get("/api/matchresults", (req, res) => {
  db.query("SELECT * FROM matchresults", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/api/groupstandings", (req,res) => {
  
  db.query(
    `
    SELECT team, phase, SUM(points) AS totalPoints
    FROM (
      SELECT code_equipe1 AS team, score_equipe1 AS goals, phase,
             CASE 
               WHEN score_equipe1 > score_equipe2 THEN 3
               WHEN score_equipe1 = score_equipe2 THEN 1
               ELSE 0
             END AS points
      FROM matchresults
      UNION ALL
      SELECT code_equipe2 AS team, score_equipe2 AS goals, phase,
             CASE 
               WHEN score_equipe2 > score_equipe1 THEN 3
               WHEN score_equipe2 = score_equipe1 THEN 1
               ELSE 0
             END AS points
      FROM matchresults
    ) AS combined
    WHERE phase != "pool"
    GROUP BY team, phase
    ORDER BY phase, totalPoints DESC, team;
  `,
    (err, results) => {
        
        if (err) throw err;
        res.json(results);
    }
  );
});

app.post("/api/tirage", (req, res) => {
  if (!req.body.query) {
    return res.status(400).json({ message: "Requete manquante" });
  }
  const data = req.body["query"];
  try {
    let query = "TRUNCATE TABLE matchs;";
    data.forEach((element) => {
      query += element;
    });
    db.query(query, (err) => {
      if (err) throw err;
    });

    db.query(
      "SELECT m.code_equipe1, m.code_equipe2, e1.name as nom_equipe1, e2.name as nom_equipe2, m.groupe  FROM matchs m LEFT JOIN equipes e1 on e1.code = m.code_equipe1 LEFT JOIN equipes e2 on e2.code = m.code_equipe2",
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  } catch (erreur) {
    console.error(erreur);
    res.json({ message: "Aucune données n' été transmise à l'api" });
  }
});

app.listen(3001, () => {
  console.log("Serveur démarré sur le port 3001");
});
