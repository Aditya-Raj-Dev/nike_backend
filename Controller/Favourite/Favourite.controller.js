const {Favouritesmodel}=require("../../Model/Favourite/Favourite.model")
const { PostFavourite,getFavourites, DeleteItem, DeleteFav } = require("../Crud.controller")

const Postfav=PostFavourite(Favouritesmodel)
const getfav=getFavourites(Favouritesmodel)
const deletefav=DeleteFav(Favouritesmodel)

module.exports={Postfav,getfav,deletefav}
