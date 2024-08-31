import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import mongoose from './config/database.js';
import MongoStore from 'connect-mongo';
import sessionsRouter from './routes/api/sessions.js';
import viewsRouter from './routes/views.js';

const app = express();

const PORT = 8080

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase2_cookie_session_2?retryWrites=true&w=majority&appName=Cluster0' }),
    // cookie: { maxAge: 180 * 60 * 1000 },
}));

app.use('/api/sessions', sessionsRouter);
app.use('/', viewsRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/* Dependencias
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "connect-mongo": "^5.1.0",
    "express": "^4.19.2",
    "express-handlebars": "^7.1.2",
    "express-session": "^1.18.0",
    "mongoose": "^8.4.0"

npm install bcryptjs body-parser connect-mongo express express-handlebars express-session mongoose

conexion a base de datos
mongodb+srv://cri2024:cri2024@cluster0.mswsapd.mongodb.net/clase2_cookie_session_2?retryWrites=true&w=majority&appName=Cluster0

1 */
