const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch"); //this is cos node cannot just call the fetch api

const app = express();
app.use(bodyParser.json());

app.post('/generate', async (req, res) => { //use an async on the mother function for where you want to await
   const array_users = req.body; // this is an array of user ids
    const empty_array = [];     //saves appended details

    for(var i = 0; i< array_users.length; i++){
        var user_id = array_users[i];
        var service_id = "301f673a804f11e8827d021e02505af5qrh3h"
        const url = `http://dcb.terragonbase.com?user_id=${user_id}&service_id=${service_id}`;
       
        let external = await fetch(url, { //we call the fetch url and we have to await it cos it takes time
        method: "GET",
        headers: {
            "X-Host-Override": "dcb-user-by-id.tmoni-service.ng"
        }
        })

        external = await external.json(); //this is the response from the fetch from the external api

        let value = {
            "user_id" : user_id,
            "msisdn": external.response.msisdn //this is the attribute we want from the response we get
        }
        empty_array.push(value);
    }
    res.send({
        "message": `${array_users.length} users successfully fetched`,
        "error_code": 200,
        "error": false,
        "response": empty_array
    })
}
) 

    app.listen(5000, () => {
    console.log('Connected on port 5000') //lsof -i :5000 kills the port, then kill -9 {PID}
    })


