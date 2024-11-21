import express from 'express';

import { Router } from 'express';



const router = Router();



router.get('/movies', (_, res) => {

  res.send('List of movies');

});



export { router as routes };

// import { Router } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// Add your routes here

