const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

// Configurer la connexion à la base de données
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "eurofoot2024",
    multipleStatements: true
});

//Api pour récupérer les équipes
app.get('/api/hat1', (req, res) => {
    db.query('SELECT * FROM equipes WHERE hat = 1 AND playoff IS NULL', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/api/hat2', (req, res) => {
    db.query('SELECT * FROM equipes WHERE hat = 2 ', (err, results) => {
        if (err) throw err;
        
        res.json(results);
    });
});

app.get('/api/hat3', (req, res) => {
    db.query('SELECT * FROM equipes WHERE hat = 3', (err, results) => {
        if (err) throw err;
        
        res.json(results);
    });
});

// API pour récupérer des données
app.get('/api/equipes', (req, res) => {
    db.query('SELECT * FROM equipes', (err, results) => {
        if (err) throw err;
        
        res.json(results);
    });
});

app.post('/api/tirage', (req, res) => {
    if (!req.body.query) {
        return res.status(400).json({ message: 'Requete manquante' });
    }
    const data = req.body["query"];
    console.log(data);
    try{
        let query = "TRUNCATE TABLE matchs;"
        data.forEach(element => {
            query += element;
        });
        db.query(query, (err) => {
            if (err) throw err;
        });

        db.query('SELECT m.code_equipe1, m.code_equipe2, e1.name as nom_equipe1, e2.name as nom_equipe2, m.groupe  FROM matchs m LEFT JOIN equipes e1 on e1.code = m.code_equipe1 LEFT JOIN equipes e2 on e2.code = m.code_equipe2', (err, results) => {
            if (err) throw err;
            console.log("Requete passée :", results);
            res.json(results);
        });
    }catch (erreur){
        console.error(erreur);
        res.json({message: 'Aucune données n\' été transmise à l\'api'});
    }
    
});

app.listen(3001, () => {
    console.log('Serveur démarré sur le port 3001');
});