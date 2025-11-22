const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

const aiRoutes = require('./routes/ai');
app.use("/api/ai", aiRoutes);


// simple in-memory items
let items = [
{ id: 1, name: 'Alpha' },
{ id: 2, name: 'Beta' }
];


app.get('/api/items', (req, res) => {
res.json({ ok: true, items });
});


app.post('/api/auth/login', (req, res) => {
const { username, password } = req.body;
if (username === 'admin' && password === 'admin') {
return res.json({ ok: true, token: 'fake-jwt-token' });
}
res.status(401).json({ ok: false, message: 'invalid credentials' });
});


if (require.main === module) {
app.listen(port, () => console.log(`API server running on http://localhost:${port}`));
}


module.exports = app;