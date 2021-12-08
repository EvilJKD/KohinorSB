import { ObjectId } from "mongoose";

export interface Tickets {
    _id: string;
    asunto: string;
    fecha: Date;
    status: string;
    usuario: ObjectId, ref: 'user';
  }