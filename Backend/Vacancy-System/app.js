const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes'); 
const passwordRoutes = require('./routes/passwordRoutes');

app.use(express.json());
app.use(cors()); 

// Use user routes
app.use('/api', userRoutes);

// Use password reset routes
app.use('/api', passwordRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
