<template>
<v-container>
    <v-row align="start">
        <v-col cols="12" xs="12" sm="10" >
            <v-form class="d-flex justify-space-between flex-sm-wrap" @submit.prevent="getValue">
                <v-text-field solo clearable v-model=" inputValue" class="flex-sm-grow-1">
                </v-text-field>
                <v-btn large class="ml-4 flex-sm-shrink-1" @click="getValue">Find</v-btn>
            </v-form>
        </v-col>
        <v-col cols="12" xs="12" sm="2">
            <Appfilter />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import Appfilter from "../app-filter";
export default {
    name: "Appinput",
    data() {
        return {
            inputValue: "",
        };
    },
    components: {
        Appfilter,
    },
    methods: {
        getValue() {
            this.$emit("getInputValue", this.inputValue);
            this.inputValue="";
        },
    },
};
</script>

<style lang="scss">

</style>
