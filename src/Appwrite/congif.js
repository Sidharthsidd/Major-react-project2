import conf from "../conf/conf";
import {Client ,ID,Databases,Storage,Query,} from "appwrite"


export class Service{
  client =new Client();
  databases;
  bucket;
  constructor (){
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteeProjectId)
         this.databases =new Databases(this.client)
         this.bucket=new  Storage(this.client)
  }
         async createPost({title,slug ,ccontent,featuredImage,status,userId}){
         try{
            return await this.databases.createDocument(
                conf.appwriteDayabasesId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )

         }catch(error){

         }
        }

        async updatePost(slug ,{title,content,featuredImage,status}){
            try{
                await conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            }catch(error){
                return error

            }
        }
        async deletePost(slug){
            try{
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                )
                return true
            }catch(error){
                console.log("appwrite service :: deletePost :: error ",error);
                return false
            }
        }
  
}


const service=new Service()
export default service; 