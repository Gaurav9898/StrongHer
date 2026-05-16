import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 1999;
const frontendDist = path.resolve(__dirname, '../frontend/dist');

app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running', port });
});

app.get('/api/contact', (req, res) => {
  res.json({
    phone: '+91 98296 39773',
    whatsapp: 'https://wa.me/919829639773'
  });
});

app.use(express.static(frontendDist, { extensions: ['html'] }));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'));
});

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
