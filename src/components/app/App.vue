<template>
<div id="app">
    <v-app>
        <v-container>
            <v-row>
                <Appheader :header="header" />
            </v-row>
            <v-row>
                <Appinput @getInputValue="getInputValue" />
            </v-row>
            <v-row>
                <v-main>
                    <Appmain 
                    :fetchError="fetchError" 
                    :videoItems="videoItems" 
                    :videotowatch="videoToWatch" 
                    :currentVideo="currentVideo"
                    :loading="loading"
                    />
                </v-main>
            </v-row>
        </v-container>
    </v-app>
</div>
</template>

<script>
import axios from "axios";
import Appheader from "../app-header";
import Appinput from "../app-input";
import Appmain from "../app-main";
const API_KEY = "AIzaSyB8l7ZeUQwAU2U2ugcnk5SWm9lyo1SNDeI";

export default {
    name: "App",
    components: {
        Appheader,
        Appinput,
        Appmain,
    },

    data() {
        return {
            header: "Video player app",
            inputValue: "",
            fetchError: {
                statusOk: true,
                msg: "There is an error. We couldn't fetch",
            },
            loading:false,
            videoItems:[],
            currentVideo:{},
        };
    },
    methods: {
        getInputValue(value) {
            this.inputValue = value;
            this.getVideoItems(value);
        },
        async getAPIResponse(value) {
            return await axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    key: API_KEY,
                    type: "video",
                    part: "snippet",
                    q: value,
                },
            }).then((response) => {
                this.fetchError.statusOk = true;
                return response;
            }).catch(() => {
                this.fetchError.statusOk = false;
            });
        },
        async getVideoItems(value){
            this.videoItems=[];
            this.loading=true;
            await this.getAPIResponse(value).then((response)=>{
                this.videoItems=response.data.items.map((elem)=>{
                    this.loading=false;
                    return this.videoItemsTemplate(elem);
                }); 
            });
        },
        videoItemsTemplate(data){
            return {
                id:data.id.videoId,
                channelTitle:data.snippet.channelTitle,
                description:data.snippet.description,
                title:data.snippet.title,
                thumbnails:{
                    url:data.snippet.thumbnails.high.url,
                    height:data.snippet.thumbnails.high.height,
                    width:data.snippet.thumbnails.high.width,
                },
            };
        },
        videoToWatch(id){
            let video=this.videoItems.find(elem=>elem.id===id);
            this.currentVideo=video;
        },
    },
};
</script>

<style lang="scss">
@media screen and (min-width:48em) {
    #app {
    margin:0;
    }
}
@media (min-width:64em) {
    #app {
    margin: 20vh auto 20vh auto;
}
}

</style>
