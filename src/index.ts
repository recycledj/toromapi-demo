import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import routes from './routes';
import { createConnections } from 'typeorm';

async function bootstrap() {
    // create a new express instance
    const app: any = express();

    // instance port
    const PORT: any = process.env.PORT || 3005;

    // enable cors
    app.use(
        cors({
            origin: true,
            methods: ['DELETE', 'GET', 'PATCH', 'PUT', 'POST', 'OPTIONS'],
            allowedHeaders: [
                'Authorization',
                'Origin',
                'Access-Control-Allow-Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'user-id',
                'X-Requested-Public-Key'
            ],
            credentials: false
        })
    );

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(morgan('dev'));

    // public files for request
    app.use(express.static(path.join(__dirname, 'uploads')));

    // register routes REST API
    app.use("/api", routes);

    app.listen(PORT, () => {
        console.log('App running on port:', PORT);
    });
}


// create connection to database with a ormconfig
createConnections()
.then(async () => {
    await bootstrap();
})
.catch(error => console.log(error));