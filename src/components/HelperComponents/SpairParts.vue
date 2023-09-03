<template>
    <div class="spairPartList">
        <SpairPartCard v-for="spairPart in spairPartList" :key="spairPart.id" :spairPart="spairPart"/>
    </div>
</template>

<script>
import SpairPartCard from "@/components/HelperComponents/testCard"
export default {
    data(){
        return{

        }
    },
    props:{
        spairPartList : Array
    },
    components:{
        SpairPartCard
    },
    methods:{},
}
</script>

<style>
.spairPartList{
    box-shadow: rgb(204, 219, 232) 5px 5px 5px 0px inset, rgba(255, 255, 255, 0.5) -13px -13px 16px 11px inset;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px;
    overflow-y: auto;
    height: 661px;
    background-color: transparent;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgb(204, 219, 232);
}
</style>