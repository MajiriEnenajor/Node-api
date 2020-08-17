var express = require('express');
var router = express.Router();
var country = require('../models/dataSchema');

router.post('/create', (req, res, next) =>{
    var newCountry = new country({
        name: req.body.name,
        capital: req.body.capital
    });

    newCountry.save((err, country) => {
        if(err)
            res.status(500).json({msg: err});
        res.status(200).json({msg: country});

    });
});

router.get('/read', (req, res, next) => {
    country.find({}, (err, countries) =>{
        if(err)
            res.status(500).json({msg: err});
         res.status(200).json({msg: countries});
    });
});

router.put('/update', (req, res, next) => {
    country.findById(req.body._id, (err, country) => {
        if(err)
            res.status(500).json({errmsg: err});
        country.name = req.body.name,
        country.capital = req.body.capital

        country.save((err, country) => {
        if(err)
            res.status(500).json({msg: err});
         res.status(200).json({msg: country});
        });
    });
});

router.delete('/delete/:id', (req, res, next) => {
    country.findOneAndRemove({_id: req.params.id}, (err, country) => {
    if(err)
        res.status(500).json({msg: err});
     res.status(200).json({msg: country});
    });
});

module.exports = router;
