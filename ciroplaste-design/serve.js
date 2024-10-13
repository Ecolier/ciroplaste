import express from 'express';
const app = express();
app.use(express.static('build/web'));
app.listen(4000);