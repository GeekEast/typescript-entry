import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
// TODO: Import will execute the code actually
import './controllers/LoginController'; // this will activate all decorators of RootController.
import './controllers/RootController'; // this will activate all decorators of RootController

class Server {
	app: express.Express = express();
	constructor() {
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cookieSession({ keys: [ 'laskdjf' ] }));
		this.app.use(AppRouter.getInstance());
	}

	start(port: number): void {
		this.app.listen(port, () => {
			console.log('Listening on port ' + port);
		});
	}
}

const server = new Server();
server.start(3000);
