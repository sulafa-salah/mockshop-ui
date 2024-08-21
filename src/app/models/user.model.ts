export interface IUser {
    token:        string;
    refreshToken: string;
    id:           number;
    username:     string;
    email:        string;
    firstName:    string;
    lastName:     string;
    gender:       string;
    image:        string;
}

export interface IUserCredentials{

    username:    string;
    password:     string;
}
