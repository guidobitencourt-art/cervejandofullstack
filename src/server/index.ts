import app from './api'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on http://localhost:${PORT}`)
})
