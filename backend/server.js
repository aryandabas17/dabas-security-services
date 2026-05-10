const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* ROUTES */

const inquiryRoutes = require('./routes/inquiryRoutes');

app.use('/api/inquiries', inquiryRoutes);

/* DATABASE */

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log('MongoDB Connected');

})
.catch((error) => {

  console.log(error);

});

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server Running on Port ${PORT}`);

});