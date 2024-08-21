import { sign } from "crypto";

export const ApiRoutes = {

    Product: {
       Products: "products",     
    },
    Carts: {
        addCart:"carts/add",
        getCart :"carts/user"
    },
    User :
    {
        signIn :"user/login"
    }
}