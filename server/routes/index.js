const express = require('express');
const router = express.Router();
const Board = require('../models/board');

    /* GET home page. */
    router.get('/', function(req, res, next) {
       res.render('index', { title: 'Express' });
    });

    router.get('/api/books', function(req,res){
        res.end();
    });

    router.post('/api/boards',(req,res)=>{

      let board = new Board({
          title : "mongo",
          author : "jjy",
          published_date : new Date()
      });

        // board.save(function (err, board) {
        //     if (err) return console.error(err);
        //     res.json({result: 0});
        //     return
        // });

        board.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }

            res.json({result: 1});
            console.log(1);
        });

    });

    // router.post('/api/books', function(req, res){
    //
    //     let board = new Board();
    //     // Board.title = req.body.title;
    //     // Board.author = req.body.author;
    //     // Board.published_date = new Date(req.body.published_date);
    //     board = {
    //       title : "mongo",
    //       author : "jjy",
    //       published_date : new Date()
    //     };
    //
    //     save(function(err){
    //         if(err){
    //             console.error(err);
    //             res.json({result: 0});
    //             return;
    //         }
    //
    //         res.json({result: 1});
    //         console.log(1);
    //     });
    // });


// module.exports = function(app,Board)
// {
//     // GET ALL BOOKS
//     // app.get('/api/books', function(req,res){
//     //     res.end();
//     // });
//     //
//     // // GET SINGLE BOOK
//     // app.get('/api/books/:book_id', function(req, res){
//     //     res.end();
//     // });
//     //
//     // // GET BOOK BY AUTHOR
//     // app.get('/api/books/author/:author', function(req, res){
//     //     res.end();
//     // });
//
//     // CREATE BOOK
//     app.post('/api/books', function(req, res){
//
//         let board = new Board();
//         // Board.title = req.body.title;
//         // Board.author = req.body.author;
//         // Board.published_date = new Date(req.body.published_date);
//         Board = {
//           title : "mongo",
//           author : "jjy",
//           published_date : new Date()
//         };
//
//         Board.save(function(err){
//             if(err){
//                 console.error(err);
//                 res.json({result: 0});
//                 return;
//             }
//
//             res.json({result: 1});
//             console.log(1);
//         });
//     });
//
//     // UPDATE THE BOOK
//     // app.put('/api/books/:book_id', function(req, res){
//     //     res.end();
//     // });
//     //
//     // // DELETE BOOK
//     // app.delete('/api/books/:book_id', function(req, res){
//     //     res.end();
//     // });
//
// }

module.exports = router;
