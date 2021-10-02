import express, { Request, Response, Application, request, response} from "express";
const app: Application = express();
app.use(express.json());

const port: number = 3000;
const ok: number = 200;
const created: number = 201;

const db = {
    users: [
        {
        id: 1,
        firstName: 'Juku',
        lastName: 'Porgand',
        },
        {
        id: 2,
        firstName: 'Mihkel',
        lastName: 'Valk',
        }

    ]      
}


app.get("/ping", (req: Request, res: Response) => {
    res.status(ok).json({
        message: "Hello world!",
    });
});

app.get("/users", (req: Request, res: Response) => {
    res.status(ok).json({
        users: db.users,	
    });
});

app.get("/users/:id", (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const user = db.users.find((element) => element.id === id); //otsib ID alusel massiivist vastava kasutaja välja
    res.status(ok).json({
        user	
    });
});

app.post('/users', (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const id = db.users.length + 1;
    db.users.push({
        id,
        firstName,
        lastName,
    });

    res.status(created).json({
        id,
        
    })
});

app.listen(port, () => {
    console.log(`Server is running`);
  });