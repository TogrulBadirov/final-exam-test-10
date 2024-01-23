import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000
const connectionUrl = "mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/"

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {type:String, required:true},
  desc: {type:String, required:true},
  image: {type:String, required:true},
  price: {type:Number, required:true},
});

const Items = mongoose.model('TimeZone', itemSchema);

app.get('/', async(req, res) => {
  try {
    const allItems = await Items.find({})
    res.status(200).send(allItems)
  } catch (error) {
    res.status(500).send('Server Error!')
  }
})

app.get('/:id', async(req, res) => {
    try {
        const {id} =  req.params
        const item = await Items.findById(id)
        res.status(200).send(item)
      } catch (error) {
        res.status(500).send('Server Error!')
      }
})

app.post('/', async(req, res) => {
    try {
        const item = new Items(req.body)
        await item.save()
        res.status(200).send("Item Created!")
      } catch (error) {
        res.status(500).send('Server Error!')
      }
})

app.delete('/:id', async(req, res) => {
    try {
        const {id} =  req.params
        const item = await Items.findByIdAndDelete(id)
        res.status(200).send("Item Deleted!")
      } catch (error) {
        res.status(500).send('Server Error!')
      }
})

mongoose.connect(connectionUrl)
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})