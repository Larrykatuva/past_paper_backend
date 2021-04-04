const express = require('express');
const bp = require('body-parser');
const createError = require('http-errors');
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');
const fileUpload = require('express-fileupload');
const multer = require('multer');
const upload = multer();



const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


//Importing routes
const CatalogRoutes = require('./src/routes/catalog.routes');
app.use('/', CatalogRoutes);



app.use((req, res, next) => {
    next(createError(404, 'Not found'));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})




/**
 * Running the server
 */
 const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
     console.log('Server started on port '+PORT+'...');
 })