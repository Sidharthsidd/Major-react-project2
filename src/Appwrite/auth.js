import conf from "../conf/conf"
import {Client,Account,ID} from "appwrite"

export class AuthServices{
    client =new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
         this.account =new Account(this.client)
    }
    
    async createAccount({ email, password, name }) {
        try {
            // Attempt to create a new account
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            if (userAccount) {
                // Call another method if needed after account creation
                console.log("Account created successfully:", userAccount);
                // You can trigger further actions here
            } else {
                return userAccount; // This may be redundant as successful account creation is handled above
            }
        } catch (error) {
            // If account creation fails (e.g., duplicate email)
            if (error.code === 409) {
                console.error("Conflict: Account with this email already exists.");
                // Return or handle the specific error here (e.g., inform the user)
            } else {
                console.error("Error creating account:", error);
                throw error; // Re-throw the error to be handled elsewhere
            }
        }
    }
    
    async login({ email, password }) {
        try {
            console.log("Logging in with:", email, password); // Check the credentials being passed
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            if (error.code === 401) {
                console.error("Unauthorized: Incorrect email or password.");

            } else {
                console.error("Error during login:", error);
                throw error;
            }
        }
    }
    


    async getCurrentUser(){
        try{
            return await this.account.get();

        }catch (error){
            console.log("appwrite service :: getCurrentUser ::error",error)
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();

        }catch(error){
            console.log("appwrite servive ::logout::error",error)
        }
    }
}


const authServices=new AuthServices();
export default authServices;