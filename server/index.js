const express = require( 'express');
const cors = require('cors');
const ctrl = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

//endpoints
app.get('/api/skiers', ctrl.getSkiers);

app.post('/api/skiers', ctrl.createSkier);

app.delete('/api/skiers/:id', ctrl.deleteSkiers);

app.put('/api/skiers/:id', ctrl.updateSkiers);



app.listen(4000, () => console.log('Making it on port 4000'));