import mongoose from 'mongoose';

const patientSchema= mongoose.Schema(
{

},
{timestamps:true})
export const Patient= new mongoose.models('Patient',patientSchema);