import Tour from '../models/Tour.js'

export const createtour = async(req,res)=>{
    const newtour = new Tour(req.body)
    try {
        const savedtour = await newtour.save()
        res.status(200).json({success:true,message:'Sucessfully Created',data:savedtour})
    } catch (error) {
        res.status(500).json({success:true,message:'Failed to Create'})
        console.log(error);
        
    }
}
