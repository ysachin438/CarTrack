const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // Your DB username
    password: '',    // Your DB password
    database: 'hsr_motors' // Your DB name
});

// Connect to the database
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

// GET all leads
app.get('/leads', (req, res) => {
    const { status, source } = req.query;
    
    let query = 'SELECT * FROM leads WHERE 1=1';
    let params = [];

    if (status && status !== 'all') {
        query += ' AND status = ?';
        params.push(status);
    }

    if (source && source !== 'all') {
        query += ' AND source = ?';
        params.push(source);
    }

    db.query(query, params, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// POST a new lead
app.post('/leads', (req, res) => {
    const { name, status, source } = req.body;
    const query = 'INSERT INTO leads (name, status, source) VALUES (?, ?, ?)';
    
    db.query(query, [name, status, source], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Lead added successfully', leadId: result.insertId });
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
