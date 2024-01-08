import * as express from 'express'
import { AppDataSource } from "./data-source";
import routes from './route/route';
import 'dotenv/config'
import * as cors from 'cors'

AppDataSource.initialize()
  .then(async () => {
    const app = express()

    const corsOption = {
      origin: '*',
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204
    }

    app.use(cors(corsOption))
    app.use(express.json())
    app.use('/api/v1', routes)

    app.listen(process.env.PORT , () => console.log(`Server is running at ${process.env.PORT}`))
  })
  .catch((error) => console.log(error));
