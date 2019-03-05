const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/convert', (req, res) => {
    const s = req.body; //this is the array passed in from the body 
    let arr =[]; //empty array we push the appended objects to
    
    for( var i=0; i< s.length; i++){ 
        var sexx = ["M", "F"];
        var MorF = Math.floor(Math.random()*sexx.length); //this makes it possible to randomly get either male or female

        let value = { //this appends everything i want
            "userId": s[i],
            "age": JSON.stringify(Math.floor(Math.random() * 25) + 20 ),
            "sex": sexx[MorF]
        };
        arr.push(value);
    }

    res.send({
        "error": false,	
        "code": 200,
        "message": "299 participants successfully fetched",
        "response": {
            "participants": arr
        }
    })
    
})
app.listen(5000, ()=>{
    console.log('Server listening on port 5000')
})