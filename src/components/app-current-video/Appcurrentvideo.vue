<template>
    <v-card v-if="Object.keys(currentVideo).length>0">
    <iframe width="100%" height="360" :src="videoSrc"/>
    <v-divider></v-divider>
    <v-card-title>{{currentVideo.title}}</v-card-title>
    <v-card-subtitle>{{currentVideo.channelTitle}}</v-card-subtitle>
    <v-card-text>{{currentVideo.description}}</v-card-text>
    </v-card>
</template>
<script>
export default {
    name:"Appcurrentvideo",
    props:{
        currentVideo:{
            type:Object,
            required:true,
        },
    },
    computed:{
        videoSrc(){
            return `http://www.youtube.com/embed/${this.currentVideo.id}`;
        },
    },
};
</script>
<style lang="scss">
@media screen and(max-width:20em){
    iframe{
        width:750;
    }
}
    
</style>