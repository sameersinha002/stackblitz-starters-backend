import mongoose from 'mongoose';

const medicalrecordSchema= mongoose.Schema(
{

},
{timestamps:true})
export const MedicalRecord= new mongoose.models('MedicalRecord',medicalrecordSchema);