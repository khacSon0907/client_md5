enum UserRole {
    admin = "admin",
    member = "member"
}

enum UserStatus {
    active = "active",
    inactive = "inactive"
}



export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: UserRole;
    createAt: string;
    updateAt: string;
    avatar: string;
    status: UserStatus;
}

export interface UserCreate {
    username: string;
    password: string;
    email: string;
    avatar: string;
}
export interface UserLogin {
    loginUser: string;
    password:string;

}