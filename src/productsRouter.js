

//import the modules require
const express = require("express");
const router = express.Router();

const productController = require("./productsController");

//This method will get all the Product form the product.json 
router.get("/", (req, res) => {
  try {
    //calling the controller getProducts 
    //if error return the response as 400
    //if result return the response as 200 with status OK and  data as result
    productController.getProducts((err, results) => {
        if(err){
          return res.status(400).send(err)
        }
        return res.status(200).send({STATUS:"OK", data:results});
    });
    //Handle the exception return response as 400 with status as some error msg
  } catch (err) {
        return res.status(500).send("Try after some time");
  }
});

//This method will get the product with given productId form the product.json 
router.get("/:productId", (req, res) => {
  try {
    //get the productid from the req.params
    const productId = parseInt(req.params.productId);
    
    
    //calling the controller getProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productController.getProductById(productId, (err, results) => {
      if(err){
        return res.status(400).send(err)
      }
      res.status(200).send({STATUS:"OK", data:results});
      
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
     return res.status(500).send("Try after some time");
   
  }
});

//This method will save/post a new product in the product.json 
router.post("/", (req, res) => {
  try {
    console.log(req.body);
    //get all the productdetails from the req.body
    // const productDetails = {
    // "name": req.params.newProduct['name'],
    //   "description": "To wash clothes",
    //   "price": 10000,
    //   "quantity": 10,
    //   id:5
    // }
    const productDetails = req.body;
    //calling the controller saveProductDetails method 
    //if error return the response as 400
    //if result return the response as 201 with status as OK and  data as result
    productController.saveProductDetails(productDetails, (err, results) => {
      if(err){
        return res.status(400).send(err)
      }
      return res.status(201).send({STATUS:"OK", data:results});
     
    });

  } catch (err) {
      //Handle the exception return response as 400 with status as some error msg
      console.log(err)
      return res.status(500).send("Try after some time");
  }
});



//This method will delete product with specific productid from the product.json 
router.delete("/:productId", (req, res) => {
  try {
     //get the productid from the req.params
   

    //calling the controller deleteProductById method 
    //if error return the response as 400
    //if result return the response as 200 with status as OK and  data as result
    productsController.deleteProductById(productId, (err, results) => {
      
    });

  } catch (err) {
     //Handle the exception return response as 400 with status as some error msg
    
  }
});

module.exports = router;
