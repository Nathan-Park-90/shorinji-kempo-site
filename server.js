const express = require('express');
const app = express();
const port = 3000;   
 // You can choose any port you like
 app.use(express.static('./img'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
