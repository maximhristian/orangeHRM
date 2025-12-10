export const getCredentials = () => {
     if(!process.env.USERNAME || !process.env.PASSWORD){
        throw new Error("Username and Password environment variables are not set in the script");
    } else {
        return {
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        }
    }
}      