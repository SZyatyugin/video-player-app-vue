<template>
<v-hover v-slot="{hover}">
<v-list-item class="d-flex mb-3" :elevation="hover ? 16 : 2" :class="{'on-hover':hover}" @click="videoSelect(elem.id)">
<v-img :src="elem.thumbnails.url" max-width="150" width="10" class="mr-2 flex-shrink-1"></v-img>
<v-list-item-content class="flex-grow-1">
<v-list-item-title class="text-wrap">{{elem.title}}</v-list-item-title>
<v-list-item-subtitle>{{elem.channelTitle}}</v-list-item-subtitle>
</v-list-item-content>
</v-list-item>
</v-hover>
</template>

<script>
export default {
    name: "Appvideolistitems",
    props:{
        elem:{
            type:Object,
            required:true,
        },
    },
    methods:{
        videoSelect(id){
            this.$emit("videotowatch",id);
        },
    },
};
</script>

<style lang="scss">
.v-list-item__title, .v-list-item__subtitle{
    overflow:visible;
}
.v-list-item.on-hover{
    cursor:pointer;
  background-color: rgba(rgba(245, 237, 237, 0.741), 0.8)
}

</style>
