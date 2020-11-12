<template>
<v-app-bar height="auto">
  <v-container class="d-flex justify-center">
    <v-row align="center" justify="space-around"  class="app-header">
<div>{{header}}</div>
<v-img src="../assets/video.png" max-width="70"></v-img>
    </v-row>
  </v-container>
</v-app-bar>

</template>

<script>
export default {
    name: "Appheader",
    props:{
        header:{
            type:String,
        },
    },
    data: () => ({
     
    }),
};
</script>
<style lang="scss">
.app-header{
 flex:0 0 60%;
}
</style>
