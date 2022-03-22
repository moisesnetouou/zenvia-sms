import express from 'express';

const app = express();
import {router} from './routes';

app.use(express.json());
app.use(router);

app.listen(3030, () => console.log('Servidor aberto na porta 3030'));