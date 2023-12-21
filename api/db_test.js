const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

// Configurer la connexion à la base de données
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

// API pour récupérer des données
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM equipes', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3001, () => {
    console.log('Serveur démarré sur le port 3001');
});