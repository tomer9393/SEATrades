export interface AdminUser 
{
    _id: string;
    isAdmin: boolean;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone?: string;
}