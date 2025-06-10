import express from 'express';
import summaryRoute from './routes/summaryRoute.js';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.use('/api', summaryRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});