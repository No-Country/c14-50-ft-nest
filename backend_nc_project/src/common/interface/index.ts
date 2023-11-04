import { User } from "../../auth/user/entities/user.entity";

export interface Phone{
    countryCode: string;
    phoneNumber: string;
}

export interface RequestWithUser extends Request{
    user: User
}