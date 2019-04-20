var express = require('express');
var router = express.Router();
const request = require('request');
const cheerio = require('cheerio');
const Iconv = require('iconv').Iconv;
const iconv = new Iconv('CP949', 'utf-8//translit//ignore');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//
//     res.json([{
//         id: 1,
//         username: "samsepi0l"
//     }, {
//         id: 2,
//         username: "D0loresH4ze"
//     }]);
//   res.send('respond with a resource');
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    let url = "http://redvelvet.smtown.com/";

    request({url, encoding: null}, function(error, response, body){
        let htmlDoc = iconv.convert(body).toString();
        let resultArr = [];

        const $ = cheerio.load(htmlDoc);
        let colArr = $(".boardDetails");
        for(let i = 0; i < colArr.length; i++){
            resultArr.push({
                id : i,
                text : colArr[i].children[1].attribs.title
            });
        }

        console.log(resultArr);

        res.json(resultArr);
    });
});

module.exports = router;
