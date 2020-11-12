<template>
   <v-app app>
       <Appheader :header="header"/>
   </v-app>
</template>

<script>
import Appheader from "../app-header";

export default {
    name: "App",
    components: {
        Appheader,
    },

    data: () => ({
        header:"Video player app",
    }),
};
</script>
<style lang="scss">
    #app{
        width:800px;
        margin:20vh auto;
    }

</style>
