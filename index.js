const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('tes')
})

app.listen(4000, () => {
    console.log(`Running`);
})