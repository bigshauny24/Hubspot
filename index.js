const express = require('express');
const axios = require('axios');

const app = express();

const API_KEY_TEST_PORTAL = "90cfa0bd-7a28-4d55-aa60-cf2541b033d0";

app.get ('/contacts', async (req, res) => {
    const contacts = 'https://api.hubapi.com/contacts/v1/contact/?hapikey=${API_KEY_TEST_PORTAL}'
     try{   const resp = await axios.get(contacts);
        const data = resp.data;
        res.json(data);
     }catch(err){
         console.error(err);
     }    
    });

app.listen (3000, () => console.log('listening on http://localhost:3000'));