const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 7000


const index = express()
index.use(express.static(__dirname + "/uploads"))
index.use(bodyParser.urlencoded({extended: true}))
index.use(bodyParser.text({type: 'text/plain'}))
index.use(cors())
index.use(bodyParser.json())

require('./routes')(index)

index.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})