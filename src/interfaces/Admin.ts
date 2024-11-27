export enum AdminRole {Faculty='faculty', Counselor='counselor', Manager='manager'};

export interface Admin{
    firstName:string,
    lastName:string,
    profile?:string,
    createdAt:string,
    id:string,
    role:AdminRole,
    phoneNumber:string,
    email:string,
    fullName:string

}