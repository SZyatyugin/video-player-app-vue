<template>
<v-app-bar>
    <v-img src="../assets/video.png" max-width="70"></v-img>
    <v-toolbar-title v-text="header" class="ml-3"></v-toolbar-title>           
    
</v-app-bar>
</template>

<script>
export default {
    name: "Appheader",
    props: {
        header: {
            type: String,
        },
    },
    data: () => ({

    }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.app-header {
    font-family: 'Poppins', sans-serif;
    font-size: 2em;
}
.v-toolbar__content{
    height:fit-content;
}
</style>
