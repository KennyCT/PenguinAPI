import { json, urlencoded } from 'body-parser';
import express from 'express';
import penguinRoutes from './routes/penguinRte';
import connection from './database/config';

const app = express();

app.use(json());

app.use(urlencoded({extended: true}));

app.use("/penguin", penguinRoutes);

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    res
        .status(500)
        .json({ message: err.message });
});

connection.sync().then(() => {
    console.log("Database synced successfully");
}).catch((error) => {
    console.log("Error", error)
});

app.listen(3000);
