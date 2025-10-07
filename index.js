
require('dotenv').config();
const express = require('express');
const wishRoutes = require('./routes/wishRoutes'); 
app.use(cors());
const app = express();
app.use(express.json());
app.use('/wishes', wishRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
