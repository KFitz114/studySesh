const express = require ('express'); 
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3400',
}
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv:mongodb+srv://KFitzGerald:Password1234!@skillspirecluster.opbwt.mongodb.net/notes?retryWrites=true&w=majority'
, {useNewUrlParser: true})

mongoose.connection.once('open', () => {
    console.log('Connected to DB');
})

const Schema = mongoose.Schema;

const FlashcardSchema = new Schema ({
    question: String,
    answer: String
})

const FlashcardModel = mongoose.model('Flashcards', FlashcardSchema);

app.listen('3400', () => {
    console.log('App listening on port 3400');
})

app.delete('/delete', function(req, res) {
    console.log('Delete route');
    console.log("req.body.question: ", req.query.id);
    FlashcardModel.findByIdAndRemove(req.query.id, function(err) {
        if(err) {
            res.send({message: "error"})
        } else {
            (res.send({message: "success"}))
        }
    })
})

app.get('/response', async function(req, res) {
    console.log('Response route');
    const card = await FlashcardModel.find();
    console.log('Card', card)
    res.send({card});
})

// app.get('/', function(req, res) {
//     res.send({message: 'Home'});
// })

app.get('/find', function(req, res){
    console.log('Find route');
    console.log("REQ.QUERY: ", req.query);
    FlashcardModel.findById(req.query.id, function(err, card) {
        if (err){
            console.log(err);
            res.send({message: err})
        }
        else{
            console.log("RESULT: ", card);
            res.send(card);
        }
    })
});

app.post('/modify', function(req, res) {
    console.log('Modify route');
    console.log("REQ>BODY>Question: ", req.body.question)
    console.log("Rew.body.answer:", req.body.answer);
    let card = {
        question: req.body.question,
        answer: req.body.answer,
    }
    console.log('REQ.BODY.ID: ', req.body.id);
    console.log('MODIFIED CARD: ', card);
    FlashcardModel.findByIdAndUpdate(req.body.cardId, card, 
            function (err, docs) {
                if (err){
                console.log(err)
                }
                else{
                console.log('UPDATE USER: ', docs);
                res.send({message: 'updated'})
                }
        });
})

app.post('/submit', function(req, res) {
    console.log('Submit route');
    let card = {
        question: req.body.question,
        answer: req.body.answer
    }
    const flashCard = FlashcardModel.create(card);
    console.log('Flashcard: ', card);
    res.send({message: 'Posted'})
})