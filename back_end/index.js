const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 9000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/registration_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use routes
app.use('/api/users', userRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:9000`);
});
