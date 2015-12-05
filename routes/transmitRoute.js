/**
 * Created by spider on 15/12/3.
 */
var express = require('express');
var path = require('path');
var superagent = require('superagent');
var router = express.Router();

router.get('/transmit', function (req, res, next) {
    var URL = req.query.URL ? req.query.URL : res.send({stat: 'ERR', message: 'URL param is missing'});

    superagent
        .get(URL)
        .query(req.query)
        .end(function (err, response) {
            try {
                if (err) {
                    res.send({stat: 'ERR', message: 'transmit ERR', URL: URL});
                }
                if (response.status == 200) {
                    res.send(response.body);
                }
            } catch (err) {

            }
        });
});

module.exports = router;