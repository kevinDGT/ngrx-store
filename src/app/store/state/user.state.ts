import {IUser} from '../../models/user.interface';

export interface IUserState {
  users: IUser[];
}

export const initialUserState: IUserState = {
  users: null
};


