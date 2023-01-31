


export default function handler(req, res) {
  console.log('req.body', req.body)
  const {name, email, subject, message} = req.body

  const fd = new FormData()
  fd.append('your-name', name)
  fd.append('your-email', email)
  fd.append('your-subject', subject)
  fd.append('your-message', message)

  res.json({name, email, subject, message})
}