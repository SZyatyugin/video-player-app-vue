<template>
<v-container>
    <div :class="{hide:fetchError.statusOk}">
    <v-alert type='error' v-text="fetchError.msg"></v-alert>
    </div>
<v-row>
<v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
<Appcurrentvideo :currentVideo="currentVideo" />
</v-col>
<v-col  cols="12" xs="12" sm="12" md="4" lg="4" xl="4"> 
<Appvideolist  :videoItems="videoItems" :videotowatch="videotowatch" :loading="loading"/>
</v-col>
</v-row>
</v-container>
</template>

<script>
import Appvideolist from "../app-videolist";
import Appcurrentvideo from "../app-current-video";

export default {
    data() {
        return {};
    },
    components: {
        Appvideolist,
        Appcurrentvideo,
    },
    props: {
        videoItems:{
            type:Array,
            required:true,
        },
        fetchError: {
            type: Object,
            required: true,
        },
        videotowatch:{
            type:Function,
            required:true,
        },
        currentVideo:{
            type:Object,
            required:true,
        },
        loading:{
            type:Boolean,
            requiired:true,
        },
    },
};
</script>

<style lang="scss">
.hide {
    display: none;
}
</style>
