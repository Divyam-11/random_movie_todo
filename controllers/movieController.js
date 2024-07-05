const getMovies = (req,res) =>{
res.status(200).json({"message" : "got the movie request"});
}
const postMovies = (req,res)=>{
    res.status(200).json({"message" : "got the post movie request"});
}
module.exports = {getMovies,postMovies};