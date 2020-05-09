const 
    app = require('./app'),
    yargs = require('yargs')


const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'searchs up to 100 cards in the database',
        builder: (yargs) => {
            return yargs.options('k',{
                alias: 'keyword',
                describe: 'filters by a specific keyword'
            })
        },
        handler: (argv) => {
            app.search(argv.keyword)
        }
    })
    .help('help')
    .argv