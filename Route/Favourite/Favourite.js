const {Router}=require("express")
const { Postfav, getfav, deletefav } = require("../../Controller/Favourite/Favourite.controller")


 const FavouriteRoute=Router()

 FavouriteRoute.post("/",Postfav)
 FavouriteRoute.get("/",getfav)
 FavouriteRoute.delete("/:id",deletefav)



 module.exports={FavouriteRoute}