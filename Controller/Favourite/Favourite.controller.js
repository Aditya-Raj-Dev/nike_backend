const {Favouritesmodel}=require("../../Model/Favourite/Favourite.model")
const { PostFavourite,getFavourites, DeleteItem } = require("../Crud.controller")

const Postfav=PostFavourite(Favouritesmodel)
const getfav=getFavourites(Favouritesmodel)
const deletefav=DeleteItem(Favouritesmodel)

module.exports={Postfav,getfav,deletefav}
