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
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px;
    border: 1px solid #666;
    border-radius: 10px;
    overflow-y: auto;
    height: 715px;
    background-color: white;
    justify-content: space-around;
    align-items: center;
}
</style>