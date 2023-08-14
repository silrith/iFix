<template>
    <div class="spairPartCardDiv">
      <div class="spairPartPicDiv">
        <img src="@/assets/header/about2.png" alt="Category Picture" />
      </div>
      <div class="spairPartDetailDiv">
        <p class="txt3">Header</p>
        <p class="txt2">Lorem Ipsum Lorem</p>
        <div class="spairCardFooterDiv">
            <p class="txt2">105 Euro</p>
            <div class="addRemovePart">
                <font-awesome-icon :icon="['fas', 'circle-minus']" style="color: #f26d25;" />
                <font-awesome-icon :icon="['fas', 'circle-plus']" style="color: #f26d25;" />
            </div>
        </div>
      </div>
    </div>
</template>

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
    border: 1px solid #f26d25;
    padding: 8px;
}

.spairPartPicDiv{
    width: 50%;
}

.spairPartCardDiv img{
    width: 110px;
}

.spairPartDetailDiv{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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