import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import cors from 'cors';
const port = 3000;
app.use(cors());
app.use(express.json());    


function HomePage(req,res) {
    res.status(200).send("Api fetched Successfully")
}

function About(req,res) {
    res.status(200).send("About Page")
}
app.get("/", HomePage);
app.get("/about", About);

function started() {
    console.log(`Example app listening on port ${port}`);
}


app.listen(port, started);
