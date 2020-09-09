const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const cors = require('cors');

require('dotenv').config()

app.use(cors())

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
        isFinished: Boolean
    })
    storySchema.methods.tell = function () {
        const storyName = this.name
        console.log(`I am the story known as ${storyName}, I am a ${type}!`)
    }
    const Story = mongoose.model('Story', storySchema);
    const anInfiniteHeart = new Story({ name: 'An Infinite Heart', type: 'Novel', isFinished: false })
    anInfiniteHeart.save(function (err, story) {
        if (err) return console.error(err);
        console.log(`I, ${story.name} have been added to the great store of stories!`)
    })
})