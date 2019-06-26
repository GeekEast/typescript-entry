import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
	// [key: string] 类似于小括号的功能
	body: { [key: string]: string | undefined };
}
const router = Router();
const form = `<form method="POST">
	<div>
		<label>Email</label>
		<input name="email"/>
	</div>
	<div>
		<label>Password</label>
		<input name="password" type="password">
	</div>
	<button>Submit</button>
</form>`;

router.get('/login', (req: Request, res: Response) => {
	res.status(200).send(form);
});

router.post('/login', (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (email && password && email === 'xiang.tan@tcpinpoint.com' && password === 'open') {
		req.session = { loggedIn: true };
		res.redirect('/');
	} else {
		res.status(400).send('Incorrect Email or Password!');
	}
});

router.get('/logout', (req: Request, res: Response) => {
	if (req.session) {
		req.session = undefined;
		res.redirect('/');
	}
});

router.get('/', (req: Request, res: Response) => {
	if (req.session && req.session.loggedIn) {
		res.send(`
		<div>
			<div>You are successfully logged in.</div>	
			<a href="/logout">Log out </a>
		</div>`); // login and log out
	} else {
		res.redirect('/login');
	}
});

export default router;
