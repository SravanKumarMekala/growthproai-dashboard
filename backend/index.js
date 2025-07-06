const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover Why Locals Love Cake & Co in Mumbai!",
  "Top Reasons Cake & Co is the Talk of Mumbai",
  "Cake & Co: Redefining Dessert Culture in 2025"
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    reviews: Math.floor(Math.random() * 200) + 50,
    headline: randomHeadline
  });
});

app.get('/regenerate-headline', (req, res) => {
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: randomHeadline });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
