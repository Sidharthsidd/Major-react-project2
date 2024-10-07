import conf from "../conf/conf";
import {Client ,ID,Databases,Storage,Query,} from "appwrite"


//these all are taken from the document of appwrite 
//and this methood is used in production level so that we can access the data from the obbject easily 

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

        async getPost (slug){
            try{
                return await this.document.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                )
            }catch (error){
                console.log("appwrite servive ::getPost ::getPost :: error",error);

                return false 
            }
        }

        async getPosts(queries=[Query.equal("status","active")]){
            try{

                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries,
                )
            }catch (error){
                console.log("appwrite service :: getPosts :: error",error);
            }
        }

        //file upload services 

        async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    conf.appwriteBucketId,
                    ID.unique(),
                    file,

                )

            } catch (error) {
                console.log("appwrite serive :: upload File:: error ",error)
                return false 
                
            }

        }

        async deleteFile(fileId){
            try {
                await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fileid,
            )
        return true 
    } catch (error) {
                console.log("appwrite serive:: filedeelte error ",error)
            }
        }
        getFilePreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )
        }
}

const service=new Service()
export default service; 