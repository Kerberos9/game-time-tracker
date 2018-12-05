const { db, root } = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const hltb = require('./src/hltb/hltb');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

router.get('/getUserProfile', (req, res) => {
    return res.json({ success: true });
});

router.get('/getGamesResult', async (req, res) => {
    try {
        if (!req.query.name) {
            throw 'Empty name!';
        }
        let result = await hltb.getGame(req.query.name);
        return res.json(result);
    } catch (e) {
        res.statusCode = 500;
        return res.json({ success: false, error: e });
    }
});

app.use('/api', router);
app.listen(3002, () => console.log('API listening'));
