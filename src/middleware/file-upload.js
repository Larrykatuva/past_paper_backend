var multer = require('multer');
const path = require('path');

module.exports.files={
    storage:function(){
        let to_store;
        var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'upload/')
        },
        filename: function (req, file, cb) {
            to_store = Date.now() + '_' + file.originalname;
            cb(null, to_store);
        }
      })
      
      return storage;
    },
    allowedFile:function(req, file, cb) {
        
        if (!file.originalname.match(/\.(pdf|doc|txt|jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidationError = 'Only  files are allowed!';
            return cb(new Error('Only  files are allowed!'), false);
        }
        cb(null, true);
    }
}