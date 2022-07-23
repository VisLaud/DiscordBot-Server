import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port: number | string = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`Port is live at ${port}`);
});
