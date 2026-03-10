// index.js
import express from 'express';
import authRouter from './routes/auth.routes.js'
import cors from 'cors'

const app = express();
const PORT = 3000

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Path specific middleware
// http://localhost:3000/api/auth
app.use('/api/auth', authRouter);

// app.get('/',(req,res)=> {
//     res.send("Hello")
// })

app.listen(PORT, () => {
    console.log(`Server is listen on ${PORT}`);
})