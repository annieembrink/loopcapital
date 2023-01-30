
export default function handler(req, res) {
  console.log('req.body', req.body)
  res.json({data: req.body})
}