const express = require('express');
const axios = require('axios');

const router = require('./routes/routes')

memesLink = "https://api.imgflip.com/get_memes"

axios.get(
    `${memesLink}`
)
.then(res => {
    console.log(res.data);
})



const app = express();

app.use('/', router)

app.use(
    express.json()
);

const PORT = 4269

app.listen(
    PORT, 
    ()=> {
        console.log(`Server is runniing on PORT: ${PORT} at http://localhost:${PORT}`);
    }
)