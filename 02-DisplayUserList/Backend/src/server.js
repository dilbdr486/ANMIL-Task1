import express from "express"
import userRoutes from './routes/userRoute.js'
import cors from 'cors'

const app = express();
const PORT = 3000;

const topMovies = [{
    "name":"hero"
}]

app.use(express.json())
app.use(cors())
app.use('/api/users', userRoutes);
app.get('/api/movies', (req, res) => {
    res.json(topMovies)
})




app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})