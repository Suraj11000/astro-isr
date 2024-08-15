export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ timestamp: new Date().toISOString() });
    } else {
      res.status(404).send('Not Found');
    }
  }