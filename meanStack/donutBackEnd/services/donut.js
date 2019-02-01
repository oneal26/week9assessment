// Access our newly created Mongoose Model
var Donut = require('../models/donut.js')

// Saving the context of this module inside the _the variable
_this = this





// Let's use an Async function to get the To Do List
//this is a function
    exports.getDonuts = async function(query, page, limit){

        // We also want to set up options for the mongoose paginate

        var options = {
            page,
            limit
        }

    //Let's create a Try and Catch function 
    //that way we have some error handling set. 
    //Waiting for the promise
        
    try {
        var donuts = await Donut.paginate(query, options)
        
    //Once the Mongoose promise is returned 
    //we're going to go ahead and return 
    //the To Do List it has produced 

        return donuts;

    } catch (e) {

    //If the try didn't work we're going to 
    //go ahead and let the users know what kind of 
    //Error we have

        throw Error('Oh No! We got an error while Paginating our Donuts, so sorry!' )
    }
}

exports.createDonut = async function(donut){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newDonut = new Donut({
            dough: donut.dough,
            icing: donut.icing,
            sprinkles: donut.sprinkles,
        })
    
        try{
    
            // Let's go ahead and save the User 
    
            var savedDonut = await newDonut.save()
           
            return savedDonut;
        }catch(e){
          
            //if we can't create a Donut we want to throw an error 
    
            throw Error("Error while Cooking a Donut")
        }
    }






    exports.updateDonut = async function(donut){
        var id = donut.id
    
        try{
            //Find the old Donut Object by the Id
        
            var oldDonut = await Donut.findById(id);
        }catch(e){
            throw Error("Error occured while Finding the Donut")
        }
    
        // If no old User Object exists return false
    
        if(!oldDonut){
            return false;
        }
    
        console.log(oldDonut)
    
        //Edit the User Object
        oldDonut.dough = donut.dough
        oldDonut.icing = donut.icing
        oldDonut.sprinkles = donut.sprinkles
    
    
        console.log(oldDonut)
    
        try{
            var savedDonut = await oldDonut.save()
            return savedDonut;
        }catch(e){
            throw Error("And Error occured while updating the Donut");
        }
    }

    exports.deleteDonut = async function(id){
    
        // Delete the User
    
        try{
            var deleted = await Donut.deleteOne({_id: id});
            if(deleted.n === 0){
                throw Error("Donut Could not be deleted")
            }
            return deleted
        }catch(e){
            throw Error("Error Occured while Deleting the Donut")
        }
    }