const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 7000

let details = [ {
    "studentFirstName":"John",
    "collegeName": "IIT",
    "location": "Mumbai"
   },
   {
    "studentFirstName":"Thomas",
    "collegeName": "IIT",
    "location": "Bengaluru"
   },
   {
    "studentFirstName":"Robert",
    "collegeName": "NIT",
    "location": "Sikkim"
   }
];

result = { "result": "Success" }

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/student/add', (req, res) => {

    res.send(result);
});

app.get('/student/getDetails', (req, res) => {

            res.send(details);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));