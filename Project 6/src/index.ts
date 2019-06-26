import express, { Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import Login from './routes/LoginRouter';
import cookieSession from 'cookie-session';
const app = express();

// similar to adding the body attribute to req
app.use(express.urlencoded({ extended: true }));
// similar to adding the session atrribute to req
app.use(cookieSession({ keys: [ '880' ] }));
// log the server
app.use(morgan('tiny'));
// compress the code
app.use(compression());

app.use('/', Login);

// 404 always the last one
app.get('*', function(req: Request, res: Response) {
	res.status(404).send('what???');
});

app.listen('9000', () => console.log('Listening on port 9000'));
