const mongoose = require('mongoose')

mongoose.connect(
  `mongodb+srv://mongodb_user:descode@cluster0.qdl0w.mongodb.net/techno?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'))

db.once('open', function () {
  console.log('Connected to Database :: MongoDB')
})

module.exports = db
