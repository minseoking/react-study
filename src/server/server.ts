import express, { Request, Response } from "express";

class Server {
    private app:express.Application;

    constructor() {
        this.app = express();
        this.router();
    }

    private router () {
        this.app.get('/api', (req: Request, res: Response) => {
            res.json({ Success: true,Result:[{item:'one'},{item:'two'}] })
        })

        this.app.post('/api/login', (req: Request, res: Response) => {
            res.json({ Success: true })
        })
    }

    public getInstance () {
        return this.app;
    }
}

export default Server