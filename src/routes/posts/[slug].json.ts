import type { Request, Response } from 'express';

export function get(req: Request, res: Response) {
	const { slug } = req.params;

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({ title: slug }));
}
