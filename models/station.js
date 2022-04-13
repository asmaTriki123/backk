const mongoose = require( 'mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
   
    email: {
        type: String,
        
    },
    Nom_station: {
        type: String,
        
       
    },
    type_lavage: {
        type:String,
       
       
    },
    latitude: {
        type:String,
       
       
    },
    longitude: {
        type:String,
        
    },
    password:{
        type: String,
      
    },
    statut :{ type:Boolean,
    default :false,
    },
    Role :{ type:String
        
    
    }
});



 module.exports = mongoose.model('station', userSchema);
