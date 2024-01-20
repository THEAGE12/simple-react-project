const express = require("express")
const collection=require("./mongo")
const cors=require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/get-data", cors(), async (req, res) => {
    try {
      const result = await collection.find({});
      
      if (result) {
        res.status(200).json(result); // Wrap the single result in an array
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  app.get("/get-data/customerdetails", cors(), async (req, res) => {
    try {
      const nameToSearch = Array.isArray(req.query.name)
      ? req.query.name[0]
      : req.query.name;
      
      const result = await collection.findOne({name: nameToSearch});
      console.log("testing"+ result)
      if (result) {
        res.status(200).json([result]); // Wrap the single result in an array
      } else {
        res.status(404).json({ message: 'Data not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  app.post("/delete-customer",cors(), async (req, res) => {
    try {
      const customerId = req.body;
          
      // Validate if the provided ID is a valid ObjectId
      
  
      // Attempt to delete the customer
      const result = await collection.deleteOne({ id: customerId.toSend });
            
      if (result.deletedCount > 0) {
        res.status(200).json({ message: 'Customer deleted successfully' });
      } else {
        res.status(404).json({ message: 'Customer not found' });
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
app.post("/",async(req,res)=>{
    try {
        const { formData } = req.body;

        // Assuming 'formData' is an object with properties like 'name', 'phone', 'id', 'aadhaar'
        const data = {
          name: formData.name,
          phone: formData.phone,
          id: formData.id,
          aadhaar: formData.aadhaar
        };

        await collection.insertMany([data]);

        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})
app.listen(8000,()=>{

    console.log("port connected")
})
