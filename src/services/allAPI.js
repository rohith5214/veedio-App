import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


//upload video
export const uploadVideo = async (reqBody)=>{
    //make post http request to http://localhost:4000/videos to add video in json server and return response to add component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

//get all videos
export const getAllVideos = async ()=>{
        //make get http request to http://localhost:4000/videos to get allvideo from json server and return response to view component
        return await commonAPI("GET",`${serverURL}/videos`,"")


}

//get all videos
export const getAVideo = async (id)=>{
    //make get http request to http://localhost:4000/videos/id to get a video from json server and return response to viedeocard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")


}

//remove a video from json server
export const deleteAVideo = async (id)=>{
    //make delete http request to http://localhost:4000/videos/id to remove a video from json server and return response to viedeocard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

//store watching video history to json server

export const addToHistory = async (videoDetails)=>{
        //make post http request to http://localhost:4000/videos/id to  add videohistory to json server and return response to viedeocard component
        return await commonAPI("POST",`${serverURL}/history`,videoDetails)

}
//get all watching video hidtory from json server
export const getAllhistory = async ()=>{
        //make get http request to http://localhost:4000/history to get a video history from json server and return response to the history componet
        return await commonAPI("GET",`${serverURL}/history`,"")

}
//delete watching video hidtory from json server
export const deleteHistory = async (id)=>{
    //make delete http request to http://localhost:4000/history to delete video history from json server and return response to the history componet
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})

}

//Add a category to json server
export const addCategory = async (reqBody)=>{
    //make post http request to http://localhost:4000/category to add category in json server and return response to category component
    return await commonAPI("POST",`${serverURL}/category`,reqBody)
}

//get all category from json server
export const getAllCategory = async ()=>{
    //make get http request to http://localhost:4000/category to get all category from json server and return response to category component
    return await commonAPI("GET",`${serverURL}/category`,"")
}

///delete a category from json server
export const deleteCategory = async (id)=>{
    //make delete http request to http://localhost:4000/category to delete a particular category from json server and return response to category component
    return await commonAPI("DELETE",`${serverURL}/category/${id}`,{})
}

///update a category from json server
export const updateCategory = async (id,body)=>{
    //make put http request to http://localhost:4000/category to update a particular category from json server and return response to category component
    return await commonAPI("PUT",`${serverURL}/category/${id}`,body)
}
    