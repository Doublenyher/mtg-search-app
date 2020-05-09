const
    inquirer = require('inquirer')
    magic = require('magicthegathering')

async function search(keyword = ''){
    const searchResponse = await magic.cardSearch(keyword)
    const result = searchResponse.cards

    const searchDetails = await details(result)
    
    let id = searchDetails.mtg
    let split = 0
    for(let i = 0; i < id.length; i++){
        if(id[i] == ':'){
            split = (i + 2)
        }
    }
    id = id.substring(split)

    const detailResponse = await magic.cardDetails(id)
    console.log(detailResponse.cards[0])
}

async function details(result){

    const displaySearch = result.map(card => {
        return{ name: `${card.name} : ${card.id}`}
    })

    return inquirer.prompt([{
        type: 'list',
        name: 'mtg',
        message: 'Which card would you like to know more about?',
        choices: displaySearch
    }])
}

module.exports = {
    search
}