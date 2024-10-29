import express from 'express';
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
const port = 3000;
app.use(cors());
app.use(express.json());    

let contact= [];

function Contact (req,res) {
 
        const { name, email, subject, message } = req.body;
    
        contact.push({ name, email, subject, message });
        res.status(200).json({ message: 'Form submitted successfully!' });
    };

    function Contact1(req, res) {
        res.status(200).json(contact);
    }

app.post('/contact' , Contact)
app.get('/contactall' , Contact1)


mongoose.connect('mongodb://localhost:27017/contact', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "contact" });

function started() {
    console.log(`Example app listening on port ${port}`);
}


app.listen(port, started);
