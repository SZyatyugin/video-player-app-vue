<template>
<v-card>
<v-list three-line class="d-flex flex-wrap justify-center">
<v-list-item-title class="text-h5 text-center" >Video List</v-list-item-title>
<v-divider class="mb-2"></v-divider>
<v-img v-if="loading" src="../assets/Spinner-1s-200px.gif" max-width="100"></v-img>
   <Appvideolistitems v-for="elem in videoItems" :key="elem.id" :elem="elem" @videotowatch="videotowatch"/>
</v-list>
</v-card>
</template>

<script>
import Appvideolistitems from "../app-videolist-items";
export default {
    components: {
        Appvideolistitems,
    },
    name: "Appvideolist",
    props:{
        videoItems:{
            type:Array,
            required:true,
        },
        videotowatch:{
            type:Function,
            required:true,
        },
        loading:{
            type:Boolean,
            required:true,
        },
    },
};
</script>

<style lang="scss">

</style>
