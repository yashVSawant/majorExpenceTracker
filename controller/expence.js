const expence = require('../model/expence');

exports.postExpence = async(req,res,next)=>{
    try{
        const {amount , decription , category} = req.body;
        console.log(amount ,decription ,category);
        const posted = await expence.create({amount,decription,category});
        res.json(posted);
    }catch(err){
        res.status(500).json({success:false , message:'error Something went wrong !'})
    }
}

exports.getExpences = async(req,res,next)=>{
    try{
        const allexpences = await expence.findAll();
        res.json(allexpences);
    }catch(err){
        res.status(500).json({success:false,message:'error Something went wrong !'})
    }
}

exports.deleteExpence = async(req,res,next)=>{
    const id = req.query.id;
    try{
        const getExpence = await expence.findByPk(id);
        getExpence.destroy();
        res.json({success:true})
    }catch(err){
        console.log(err)
    }
}