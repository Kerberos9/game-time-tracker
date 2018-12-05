const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

async function getGame(name){
    console.log(`Searching for game ${name}`);
    return await hltbService.search(name);
}

module.exports = {
    getGame
};