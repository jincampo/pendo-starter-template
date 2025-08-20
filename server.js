import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(compression());

// Serve static files from dist directory
app.use(express.static('dist'));

// SPA fallback: serve index.html for all routes that don't match static files
// This ensures that React Router can handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});