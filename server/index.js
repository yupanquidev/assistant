import express from 'express'
import logger from 'morgan'

const port = process.env.PORT ?? 3000

const app = express()
app.use(logger("dev"))
app.use(express.static('client'))

app.get('', (req, res) => {
  app.use(express.static(path.join(process.cwd(), './client/index.html')))
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
