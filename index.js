const express = require('express');

const app = express();

app.use(express.json())

app.get('/results/:n1/:n2', (req,res)=> {
    res.send('Suma = '+(parseInt(req.params.n1,10)+parseInt(req.params.n2,10)));
});

app.post('/results/', (req,res)=>{
    res.send('Multiplicacion = '+(parseInt(req.body.n1,10)*parseInt(req.body.n2,10)));
});

app.put('/results/', (req,res)=>{
    res.send('Division = '+(parseInt(req.body.n1,10)/parseInt(req.body.n2,10)));
});

app.patch('/results/', (req,res)=>{
    res.send('Potencia = '+(Math.pow(parseInt(req.body.n1,10),parseInt(req.body.n2,10))));
});

app.delete('/results/:n1/:n2', (req,res)=>{
    res.send('Resta = '+(parseInt(req.params.n1,10)-parseInt(req.params.n2,10)));
});

app.listen(7777, ()=>{
    console.log('Server running on port 7777');
})
