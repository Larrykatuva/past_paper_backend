const createError = require('http-errors');
const db = require('../sequelize/models/index');
handleCatalogErrors = require('../errors/catalog');
const { Op } = require("sequelize");
const fs = require('fs')
var multer  = require('multer');
var fileUpload= require('../middleware/file-upload');


module.exports = {
    createResearchPaper: async (req, res, next) => {
        const name = req.body.name;
        const desc = req.body.desc;
        const price = req.body.price;
        
        var upload = multer({
            storage: fileUpload.files.storage(), 
            allowedFile:fileUpload.files.allowedFile 
            }).single('file');
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log(res)
                res.send(err);
            } else if (err) {
                res.send(err);
            }else{
                res.send('uploaded');
            }
        });

        if(!name){
            return res
                .status(400)
                .send({error: handleCatalogErrors('CAR_05', 400, name)});
        }
        if(!desc){
            return res
                .status(400)
                .send({error: handleCatalogErrors('CAR_07', 400, desc)});
        }
        if(!price){
            return res
                .status(400)
                .send({error: handleCatalogErrors('CAR_06', 400, price)});
        }
        try{
            const paper = await db.Catalog.findOne({
                where: {
                    name,
                },
            });
            if(paper){
                return res 
                    .status(400)
                    .send({error: handleCatalogErrors('CAR_03', 400, name)});
            }
            const newPaper = await db.Catalog.create({
                name,
                desc,
                price
            });
            if(newPaper){
                res.status(200).send({
                    error: false,
                    message: "Research paper added successfully"
                });
            }

        }catch(error){
            next(createError(
                error.status,
                error.message
            ));
        }
    },

    getAllResearchPapers: async (req, res, next) => {
        try {
            const papers = await db.Catalog.findAll();
            return res.status(200).send(papers);
        } catch (error) {
            next(createError(
                error.status,
                error.message
            ));
        }
    }
}
