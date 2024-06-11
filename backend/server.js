const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// routes to be here
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`Server ${PORT}`);
})