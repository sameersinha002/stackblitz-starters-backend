import mongoose from 'mongoose';

const doctorSchema= mongoose.Schema(
{

},
{timestamps:true})
export const Doctor= new mongoose.models('Doctor',doctorSchema);