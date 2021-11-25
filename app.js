const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js')
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => console.log("server is runnig on port :", port));