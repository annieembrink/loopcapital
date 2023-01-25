
export default function handler(req, res) {
    const data = req.body
    console.log('data', data)
    if(req.body.length > 2) {
      console.log('input ok')
      res.status(200).json({ success: 'ok' })
    } else {
      console.log('input too short')
      res.status(200).json({ fail: 'Please write something in the field' })

    }
  }