<template>
  <div class="badgeMainDiv">
    <div class="badgeHeader" style="padding: 50px 0;">
      <p class="txt5" style="text-align: center; padding: 0 30px">
        <span style="color: #ff6700;">Unsere Zahlen</span>
        sprechen für sich!
      </p>
    </div>
    <div class="badgeContentDiv">
        <div class="badgeContentTextDiv" style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        ">
          <p class="txtBadge">15+</p>
          <p class="txtBadge2">Jahre Erfahrung</p>
        </div>
        <div class="badgeContentTextDiv" style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        ">
          <p class="txtBadge">10.000+</p>
          <p class="txtBadge2">Gerate repaiert</p>
        </div>
    
        <div class="badgeContentTextDiv" style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        ">
          <p class="txtBadge">100%</p>
          <p class="txtBadge2">Zufriedene Kunden</p>
        </div>
        <div class="badgeContentTextDiv" style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        ">
          <p class="txtBadge">100%</p>
          <p class="txtBadge2">Fachexperten</p>
        </div>
    </div>
    <div class="badgeFooterDiv">
      <div>
        <p class="txt4">Überzeuge dich</p>
        <p class="txt4">
          selbst!
          <img
            class="arrowRight"
            src="@/assets/header/Arrow.png"
            alt="Arrow right"
          />
        </p>
      </div>
      <img
        class="trustedShopLogo"
        src="@/assets/header/trustedshops.png"
        alt="Trusted Shop Image"
      />
    </div>
  </div>
</template>

<style>
.badgeMainDiv {
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 45px 0px 45px 0px;
}

.badgeHeader{
  display: flex;
  text-align: center;
}

.badgeContentDiv {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: rgb(242, 109, 37, 0.5);
  background-color: rgb(242, 93, 38, 0.5);
  padding: 50px 30px 50px 30px;
  border-radius: 25px;
}

.badgeContentTextDiv {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0px 31px;
}

.txtBadge {
  font-family: Poppins-bold;
  font-size: 30px;
  line-height: 1.5;
  color: white;
}

.txtBadge2 {
  font-family: Poppins-bold;
  font-size: 15px;
  line-height: 1.5;
  color: #5236ff;
}

.badgeFooterDiv {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
}

.arrowRight {
  width: 50%;
}

.trustedShopLogo {
  width: 40%;
}

@media (max-width: 680px) {
  .badgeFooterDiv {
    text-align: center;
  }

  .trustedShopLogo {
    width: 275px;
  }

  .badgeMainDiv{
    width: 100%;
  }

  .txtBadge2{
    font-size: 12px;
  }

  .badgeContentTextDiv{
    width: 50%;
    justify-content: space-between;
  }
}

@media ( max-width: 524px){
  .badgeContentTextDiv{
    width: 100%;
    justify-content: space-between;
  }
}
</style>
