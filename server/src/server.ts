import express from 'express';
import routes from './routes/index';
// import { Router } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// Add your routes here

import { Router } from 'express';



const router = Router();



// Example route

router.get('/', (req, res) => {

  res.send('Hello, everyone!');

});



export default router;
