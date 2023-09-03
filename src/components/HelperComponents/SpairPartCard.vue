<template>
    <div class="spairPartCardDiv">
      <div class="spairPartPicDiv">
        <img :src='cardElement.repairTypePicture' alt="Category Picture" />
      </div>
      <div class="spairPartDetailDiv">
        <p class="txt2"><b>{{ cardElement.repairTypeCategory }}</b></p>
        <p class="txt2"><b>{{ cardElement.repairTypePrice }}</b> <span style="color: #f26d25; font-weight: 600;">€</span></p>
        <p class="txt2"><b>{{ cardElement.deadLine }}</b></p>
        <div class="spairCardFooterDiv">
            <div class="addRemovePart">
                <font-awesome-icon :icon="['fas', 'circle-minus']" style="color: #f26d25;" @click="removeFromList(cardElement)"/>
                <font-awesome-icon :icon="['fas', 'circle-plus']" style="color: #f26d25;" @click="addToList(cardElement)"/>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    cardElement: Object,
  },
  methods:{
    addToList(object){
        this.$parent.selectedRepairTypes.push(object);
        console.log(this.$parent)
    },
    removeFromList(object){
        this.$parent.selectedRepairTypes = this.$parent.selectedRepairTypes.filter(x=> x !== object);
    }
  }
};
</script>

<style>
.spairPartCardDiv{
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 160px;
    border-radius: 20px;
    border: 2px solid #666;
    padding: 8px;
}

.spairPartPicDiv{
    width: 50%;
}

.spairPartCardDiv img{
    width: 85px;
}

.spairPartDetailDiv{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.spairCardFooterDiv{
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.addRemovePart{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>