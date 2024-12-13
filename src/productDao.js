
//import fs module
const fs = require("fs");



//The getProducts function take done as callback
//It will read the product.json file

const getProducts = function(done){
    fs.readFile("src/products.json", (err, fileContent)=>{
      if(err){
        return done("Encountered error while getting users details")
      }

      let productData = JSON.parse(fileContent);
      return done(undefined, productData);
    })

//parse the filecontent and save it in another varible say productdata
//return the callback with first parameter as undefined and second parameter as productdata
       
}


//The function getProductById will take two parameters first the id and second the callback
//It will read the product.json file
const getProductById = function(id,done){
    //write all the logical steps
    //return the callback with first parameter as undefined and second parameter as productDetails
    fs.readFile("src/products.json", (err, fileContent)=>{
      if(err){
        return done("Encountered error while getting product details")
      }

      let productData = JSON.parse(fileContent);
      let fecthedProduct = productData.find(item=> item.id === id)
      if(fecthedProduct === undefined){
        return done("No User found for reqeusted productID")
      }else{
        return done(undefined, fecthedProduct)
      }
    })
}


//The saveProductDetails method will take productDetails and done as callback
//It will read the product.json file
const saveProductDetails = function (ProductDetails, done) {
  //write all the logical steps
  //parse the filecontent and save it in another varible say productdata
  //push the productDetails in the productData
  let productData=[];
  
  fs.readFile("src/products.json", (err, fileContent)=>{
    if(err){
      return done("Encountered error while getting users details")
    }

    productData = JSON.parse(fileContent);
    const len = productData.length;
     productData[len+1] = ProductDetails
    
  }) 
  //Write the productData into the file 
  fs.readFile("src/products.json", (err,updatedContent)=>{
    if(err){
      return done("Encountered error while creating a new product")
    }
    return done(undefined,ProductDetails)
  })
     
  //return the callback with undefined and ProductDetails
     
    
  }

  //The method deleteProductById will take productId and done as parameters
  //It will read the product.json file

  const deleteProductById = function(productId, done){
    //Write all the logical steps
     //return the callback with first parameter as undefined and second parameter as productDetails
  }


module.exports ={
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
    
}