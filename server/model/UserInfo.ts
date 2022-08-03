import mongoose, { Document, Schema } from 'mongoose';

export interface iUserInfo {
  user: string;
  status: boolean;
  activePages: { id: string; page: string };
}

export interface IUserInfoModel extends iUserInfo, Document {}

const UserInfoSchema: Schema = new Schema(
  {
    user: { type: String, required: true },
    status: { type: Boolean, required: true },
    activePages: {
      id: { type: String, required: true },
      page: { type: String, required: true },
    },
  },

  { versionKey: false }
);

export default mongoose.model<IUserInfoModel>('UserInfo', UserInfoSchema);
