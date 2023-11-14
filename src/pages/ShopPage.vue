<template>
  <div class="shopMainDiv">
    <div class="leftDiv">
      <ShopFilter :modelList="modelList" />
    </div>
    <div class="serviceFilterGradients">
      <div class="shopTextAreaWithRepirTypes">
        <div class="repairTypesDiv">
          <Card
            v-for="repairType in this.repairTypeList"
            :cardElement="repairType"
          />
          <PreLoader v-if="!this.isLoaded" />
          <p v-if="this.noRepairType == false" class="txt1">
            {{ this.$t("shoppingCart.noRepairType") }}
          </p>
        </div>
        <div class="shopFilterTextArea">
          <input
            v-model="optionalInformation"
            type="textarea"
            :placeholder="$t('serviceResultPage.textarea')"
          />
        </div>
      </div>
      <div class="cartAndButtonDiv">
        <div class="shopRepairTypesDiv2">
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 15px 0 0 0;
            "
          >
            <p class="txt4" style="color: #666 !important">
              {{ this.$t("shoppingCart.summary") }}
            </p>
          </div>
          <div class="txt3" style="width: 90%">
            <hr />
          </div>
          <div class="selectedRepairTypeList">
            <span
              v-if="this.selectedRepairTypes.length == 0"
              class="txt2"
              style="font-weight: 600"
              >{{ this.$t("shoppingCart.noSelected") }}</span
            >
            <div
              v-for="repairType in this.selectedRepairTypes"
              style="display: flex; justify-content: space-between"
            >
              <span class="txt2" style="font-weight: 600"
                ><font-awesome-icon
                  :icon="['fas', 'ban']"
                  style="color: #ff0000"
                  @click="removeFromList(repairType)"
                />
                {{ repairType.repairTypeCategory }}
              </span>
              <span class="txt2" style="font-weight: 600">
                {{ repairType.repairTypePrice }}
                <span style="color: #f26d25">€</span>
              </span>
            </div>
          </div>
          <div class="txt3" style="width: 90%">
            <hr />
          </div>
          <div class="selectedTotalPrice">
            <p class="txt2" style="font-weight: 600">
              {{ this.$t("shoppingCart.priceDetail") }}
            </p>
            <p class="txt2" style="font-weight: 600">
              {{
                this.selectedRepairTypes.reduce(
                  (total, item) => total + item.repairTypePrice,
                  0
                )
              }}
              <span style="color: #f26d25"><b>€</b></span>
            </p>
          </div>
          <div class="txt3" style="width: 90%">
            <hr />
          </div>
          <div class="repairInformation">
            <p class="txt2" style="font-weight: 600">
              <u>{{ this.$t("shoppingCart.aboutRepair") }}</u>
            </p>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div style="text-align: start; width: 50%">
                <p class="txt2" style="font-weight: 600">
                  <font-awesome-icon
                    :icon="['fas', 'circle-check']"
                    style="color: #ff9500"
                  />
                  {{ this.$t("shoppingCart.title1") }}
                </p>
              </div>
              <div style="text-align: start; width: 50%">
                <p class="txt2" style="font-weight: 600">
                  <font-awesome-icon
                    :icon="['fas', 'circle-check']"
                    style="color: #ff9500"
                  />
                  {{ this.$t("shoppingCart.title2") }}
                </p>
              </div>
            </div>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div style="text-align: start; width: 50%">
                <p class="txt2" style="font-weight: 600">
                  <font-awesome-icon
                    :icon="['fas', 'circle-check']"
                    style="color: #ff9500"
                  />
                  {{ this.$t("shoppingCart.title3") }}
                </p>
              </div>
              <div style="text-align: start; width: 50%">
                <p class="txt2" style="font-weight: 600">
                  <font-awesome-icon
                    :icon="['fas', 'circle-check']"
                    style="color: #ff9500"
                  />
                  {{ this.$t("shoppingCart.title4") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn btn-block py-3 btn-loginServiceResult"
          @click="goToShopPrepare()"
        >
          {{ $t("serviceFilter.continue") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import Card from "@/components/HelperComponents/SpairPartCard.vue";
import PreLoader from "@/components/HelperComponents/LoadingScreen2.vue";
import SpairPartCard from "@/components/HelperComponents/SpairPartCard";
import testCard from "@/components/HelperComponents/testCard";
import ShopFilter from "@/components/HelperComponents/ShopFilter";
import SpairParts from "@/components/HelperComponents/SpairParts";
import ShoppingCart from "@/components/IgnoredComponents/ShoppingCart";

export default {
  data() {
    return {
      isLoaded: false,
      modelList: [],
      repairTypeList: [],
      shoppingCart: [],
      selectedRepairTypes: [],
      optionalInformation: null,
      noRepairType: null,
      street: null,
      city: null,
      zipCode: null,
      houseNo: null,
    };
  },
  components: {
    SpairPartCard,
    testCard,
    ShopFilter,
    SpairParts,
    ShoppingCart,
    Card,
    PreLoader,
  },
  methods: {
    getAllModels() {
      this.$ajax
        .get("model/getallmodels")
        .then((response) => {
          if (response.data) {
            this.modelList = response.data;
          }
        })
        .catch((error) => {
          toast.error(this.$t("apiErrors.axiosError"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
        });
    },
    getAllRepairTypes() {
      this.$ajax
        .get("repairType/getallrepairTypes")
        .then((response) => {
          if (response.data) {
            this.repairTypeList = response.data;
            this.isLoaded = true;
            if (this.repairTypeList.length > 0) this.noRepairType = true;
            else this.noRepairType = false;
          }
        })
        .catch((error) => {
          toast.error(this.$t("apiErrors.axiosError"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
        });
    },
    goToShopPrepare() {
      if (this.selectedRepairTypes.length > 0) {
        localStorage.setItem(
          "selectedRepairTypes",
          JSON.stringify(this.selectedRepairTypes)
        );
        if (
          this.optionalInformation != null ||
          this.optionalInformation != undefined
        )
          localStorage.setItem("informationShop", this.optionalInformation);
        else localStorage.setItem("informationShop", "No Information");
        this.$router.push({
          path: "/shopPrepare",
        });
      } else
        toast.error(this.$t("shoppingCart.noSelectedRepairType"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
    },
    removeFromList(object) {
      this.selectedRepairTypes = this.selectedRepairTypes.filter(
        (x) => x !== object
      );
    },
  },
  mounted() {
    this.getAllModels();
    this.getAllRepairTypes();
    if (this.$route.query.failed == "true") {
      toast.error(this.$t("mailin.paymentFail"), {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
        toastStyle: {
          fontSize: "12px",
        },
      });
    }
  },
};
</script>

<style>
.shopMainDiv {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 30px;
}

.leftDiv {
  width: 15%;
  padding: 15px;
}

.serviceFilterGradients {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.shopTextAreaWithRepirTypes {
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
}

.repairTypesDiv {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 618px !important;
  border-radius: 10px;
  border: 2px solid #666;
  justify-content: space-evenly;
  align-items: center;
  margin: 0px 15px 15px 15px;
  position: relative;
  overflow-y: auto;
  padding: 15px;
  gap: 1rem;
}

.shopFilterTextArea {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shopFilterTextArea input {
  width: 100%;
  padding: 29px;
  border: 2px solid #ff4800;
  border-radius: 10px;
  font-family: Poppins-Regular;
  color: #666;
  caret-color: #f26d25;
  caret-shape: underscore;
}

.shopFilterTextArea input:focus {
  outline: none;
  border: 2px solid #ff4800;
}

.shopFilterTextArea input::after {
  border: 2px solid #ff4800;
  outline: none;
}

.shopFilterTextArea input::placeholder {
  text-align: center;
  font-size: 14px;
  font-family: Poppins-Regular;
  color: #999999;
  font-weight: 500;
}

.cartAndButtonDiv {
  width: 25%;
  height: 750px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 25px 0px !important;
}

.shopRepairTypesDiv2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 620px !important;
  border-radius: 10px;
  border: 2px solid #666;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  overflow-y: auto;
}

.selectedRepairTypeList {
  width: 90%;
  height: 400px !important;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

.selectedTotalPrice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100px !important;
  text-align: start;
}

.repairInformation {
  width: 90%;
  height: 200px !important;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
}

.btn-loginServiceResult {
  background-color: #f26d25 !important;
  color: #fff !important;
}

.btn-loginServiceResult:hover {
  background-color: #333333 !important;
  color: #fff !important;
}

.btn-loginServiceResult:focus {
  background-color: #333333 !important;
}

.shopTextArea {
  width: 100%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  position: relative;
}

.shopTextArea input {
  width: 100%;
  padding: 10px;
  border: 2px solid #f26d25;
  border-radius: 10px;
  font-family: Poppins-Regular;
  color: #666;
  caret-color: #f26d25;
  caret-shape: underscore;
}

.shopTextArea input:focus {
  outline: none;
  border: 2px solid #ff4800;
}

.shopTextArea input::after {
  border: 2px solid #ff4800;
  outline: none;
}

.shopTextArea input::placeholder {
  text-align: center;
  font-size: 14px;
  font-family: Poppins-Regular;
  color: #666;
  font-weight: 500;
}

.shopTextArea input:focus + .textAreaIcon {
  color: red;
  border: 2px solid #ff4800;
}

textarea:focus,
input:focus {
  border: 2px solid #ff4800;
}

@media (max-width: 1450px) {
  .shopMainDiv {
    width: 100%;
    flex-direction: column;
  }

  .leftDiv {
    width: 100%;
    overflow-x: auto;
    padding: 15px;
  }

  .cartAndButtonDiv {
    gap: 4rem;
  }
}

@media (max-width: 992px) {
  .serviceFilterGradients {
    display: block;
  }

  .shopTextAreaWithRepirTypes {
    width: 100%;
  }

  .cartAndButtonDiv {
    width: 100%;
  }
}
</style>
