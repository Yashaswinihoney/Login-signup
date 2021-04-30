const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://wini:Yashaswini@cluster0.1qqea.mongodb.net/trial?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connection successful');
}).catch((error)=>{
    console.log(error)
})
//const mongoPath='mongodb+srv://Yashaswini:bNCMIgg8p6LNoDC0@cluster0.1qqea.mongodb.net/Cluster0?retryWrites=true&w=majority';

//module.exports=async()=>{
    //await mongoose.connect(mongoPath,{
        //useNewUrlParser: true,
        //useUnifiedTopology:true
    //})
    //return mongoose
//}