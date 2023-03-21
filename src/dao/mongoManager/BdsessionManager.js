const userModel = require ('../models/user.model')

class BdsessionManager {
   
  getSession = async (email, password) => {
    return await userModel.findOne({email, password});
  }

 
  createSession = async (user)=>{
       
      const { firstName,lastName, email, password,rol} = user
      return await userModel.create({firstName , lastName, email, password, rol })
  }
}
 
module.exports = new BdsessionManager