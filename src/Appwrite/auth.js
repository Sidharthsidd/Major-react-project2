import conf from "../conf/conf"
import {Client,Account,ID} from "appwrite"

export class AuthServices{
    client =new Client();
    accouunt;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteeProjectId)
         this.account =new Account(this.client)
    }
    
    async  createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method 
                
            }else{
                return userAccount;
            }

        }catch (error){
            throw error ;
        }
    }
    async login({email,password}){
        try{
            await this.account.createEmailSession(email,password);

        }catch (error){
            throw error;
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