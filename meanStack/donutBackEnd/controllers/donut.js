var DonutService = require('../services/donut.js');

// Make sure to save the context of 
//this module inside the _this variable

_this = this




exports.getDonuts = async function(req, res, next){

    // We're going to use ternary to check 
    //the existence of the query parameters
        
        var page = req.query.page ? req.query.page : 1
        var limit = req.query.limit ? req.query.limit : 100; 
    
        try{
        
            var donuts = await DonutService.getDonuts({}, page, limit)
            
    // Return the Users list with the appropriate 
    //HTTP Status Code and Message.
            
            return res.status(200).json({status: 200, data: donuts, message: "Succesfull. Donuts Recieved"});
            
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
        }
    }


    exports.createDonut = async function(req, res, next){

        // Note: Req.Body contains the form submit values.
    
        var donut = {
            dough: req.body.dough,
            icing: req.body.icing,
            sprinkles: req.body.sprinkles
        }
    
        try{
            
    // Calling the Service function 
    //with the new object from the Request Body
        
            var createdDonut = await DonutService.createDonut(donut)
            return res.status(201).json({status: 201, data: createdDonut, message: "Succesfull. Created Donut"})
        }catch(e){
    //Return an Error Response Message 
    //with Code and the Error Message.
    return res.status(400).json({status: 400, message: "Donut Creation was Unsuccesfull, I am sorry :( "})
        }
    }
    


    exports.updateDonut = async function(req, res, next){

        // Id is necessary for the update
    
        if(!req.body._id){
            return res.status(400).json({status: 400, message: "Id must be present"})
        }
    
        var id = req.body._id;
    
        console.log(req.body)
    
        var donut = {
            id,
            dough: req.body.dough ? req.body.dough : null,
            icing: req.body.icing ? req.body.icing : null,
            sprinkles: req.body.sprinkles ? req.body.sprinkles : null,
        }
    
        try{
            var updatedDonuts = await DonutService.updateDonut(donut)
            return res.status(200).json({status: 200, data: updatedDonut, message: "Succesfully Updated Donut"})
        }catch(e){
            return res.status(400).json({status: 400, message: e.message})
        }
    }
    

    exports.removeDonut = async function(req, res, next){

        var id = req.params.id;
    
        try{
            var deleted = await DonutService.deleteDonut(id)
            return res.status(204).json({status:204, message: "Succesfully Donut Deleted"})
        }catch(e){
            return res.status(400).json({status: 400, message: e.message})
        }
    
    }