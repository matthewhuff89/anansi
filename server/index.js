const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')

require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Welcome to Anansi!')
})

app.listen(port, () => {
  console.log(`Anansi is listening at http://localhost:${port}`)
})


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log("Connected to Anansi's storehouse of stories ;)")
    const storySchema = new mongoose.Schema({
        name: String,
        type: String,
        finished: Boolean
    })
    const Story = mongoose.model('Story', storySchema);
    const anInfiniteHeart = new Story({ name: 'An Infinite Heart', type: 'Novel', finished: false })
    console.log(anInfiniteHeart.name);
})