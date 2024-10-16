import mongoose from 'mongoose';

const hospitalSchema= mongoose.Schema(
{

},
{timestamps:true})
export const Hospital= new mongoose.models('Hospital',hospitalSchema);