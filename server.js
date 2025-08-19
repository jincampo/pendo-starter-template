import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(compression());
app.use(express.static('dist'));

// Serve static files
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist/index.html'));
});

// Handle all prism routes
app.get('/prism/:page', (req, res) => {
  const page = req.params.page;
  const filePath = resolve(__dirname, `dist/pages/${page}/index.html`);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.redirect('/');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});