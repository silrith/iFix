<template>
  <div class="serviceResultPageDiv">
    <div class="serviceResultPageContent">
      <div class="repairTypesForModel">
        <div class="serviceResultDiv">
          <p class="serviceFilterText">
            <span style="color: #f26d25">{{
              this.$t("serviceResultPage.header1")
            }}</span>
            {{ this.$t("serviceResultPage.header2") }}
          </p>
          <p class="serviceFilterText2">
            {{ this.$t("serviceResultPage.subtitle") }}
          </p>
        </div>
        <div class="serviceFilterGradients">
          <div class="textAreaWithRepirTypes">
            <div class="repairTypesDiv">
              <Card
                v-for="repairType in this.repairTypeList"
                :cardElement="repairType"
              />
              <PreLoader v-if="!this.isLoaded" />
              <p v-if="this.noRepairType == false" class="txt1">{{ this.$t("shoppingCart.noRepairType") }}</p>
            </div>
            <div class="serviceFilterTextArea">
              <input
                v-model="optionalInformation"
                type="textarea"
                :placeholder="$t('serviceResultPage.textarea')"
              />
            </div>
          </div>
          <div class="cartAndButtonDiv">
            <div class="repairTypesDiv2">
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
              @click="goCheckOutPage()"
            >
              {{ $t("serviceFilter.continue") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/HelperComponents/SpairPartCard.vue";
import PreLoader from "@/components/HelperComponents/LoadingScreen2.vue";
export default {
  data() {
    return {
      isLoaded: false,
      repairTypeList: [],
      selectedRepairTypes: [],
      filterModel: [{ key: "modelId", value: 0, type: "int" }],
      optionalInformation: null,
      noRepairType : null,
      modelId : null
    };
  },
  components: {
    Card,
    PreLoader,
  },
  methods: {
    getRepairTypesForModel(id) {
      this.filterModel[0].value = parseInt(id);
      this.$ajax
        .post("repairType/SearchRepairTypes", this.filterModel)
        .then((response) => {
          if (response.data) {
            this.repairTypeList = response.data;
            this.isLoaded = true;
            if(this.repairTypeList.length > 0)
              this.noRepairType = true;
            else
              this.noRepairType = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeFromList(object) {
      this.selectedRepairTypes = this.selectedRepairTypes.filter(
        (x) => x !== object
      );
    },
    goCheckOutPage() {
      if (this.selectedRepairTypes.length == 0)
        toast.error(this.$t("shoppingCart.noSelectedRepairType"), {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: "foo-bar",
          toastStyle: {
            fontSize: "12px",
          },
        });
      else {
        localStorage.setItem(
          "selectedRepairTypes",
          JSON.stringify(this.selectedRepairTypes)
        );
        if (
          this.optionalInformation != null ||
          this.optionalInformation != undefined
        )
          localStorage.setItem(
            "informationAboutService",
            this.optionalInformation
          );
        else localStorage.setItem("informationAboutService", "No Information");
        localStorage.setItem("modelId", this.modelId);
        this.$router.push({
          path: "/checkOut",
        });
      }
    },
  },
  mounted() {
    this.getRepairTypesForModel(this.$route.query.modelId);
    this.modelId = this.$route.query.modelId;
  },
  computed: {
    ...mapGetters(["shoppingList"]),
  },
};
</script>

<style>
.serviceResultPageDiv {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}

.serviceResultPageContent {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 0;
}

.repairTypesForModel {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.repairTypeCart {
  background-color: #ff4800;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.serviceFilterText {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
  text-align: start !important;
  padding: 0 0 0 18px;
}

.serviceFilterText2 {
  font-family: Poppins-Regular;
  width: 100%;
  font-weight: 600;
  text-align: start !important;
  color: #666666;
  padding: 0 0 0 18px;
}

.serviceResultDiv {
  width: 100%;
  padding: 16px 5px;
}

.repairTypesDiv {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: 2px solid #666;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
  position: relative;
  overflow-y: auto;
  padding: 25px;
  gap: 2rem;
}

.repairTypesDiv2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  border: 2px solid #666;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  overflow-y: auto;
}

.serviceFilterGradients {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.textAreaWithRepirTypes {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.cartAndButtonDiv {
  width: 25%;
  height: 515px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0 3px 0;
}

.serviceFilterTextArea {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.serviceFilterTextArea input {
  width: 100%;
  padding: 29px;
  border: 2px solid #ff4800;
  border-radius: 10px;
  font-family: Poppins-Regular;
  color: #666;
  caret-color: #f26d25;
  caret-shape: underscore;
}

.serviceFilterTextArea input:focus {
  outline: none;
  border: 2px solid #ff4800;
}

.serviceFilterTextArea input::after {
  border: 2px solid #ff4800;
  outline: none;
}

.serviceFilterTextArea input::placeholder {
  text-align: center;
  font-size: 14px;
  font-family: Poppins-Regular;
  color: #999999;
  font-weight: 500;
}

.serviceResultContainer-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: none;
}

.btn-loginServiceResult {
  background-color: #f26d25;
  color: #fff;
}

.btn-loginServiceResult:hover {
  background-color: #333333;
  color: #fff;
}

.btn-loginServiceResult:focus {
  background-color: #333333;
}

.selectedRepairTypeList {
  width: 90%;
  height: 200px;
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
  height: 100px;
  text-align: start;
}

.repairInformation {
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  text-align: start;
}
@media (max-width: 1360px) {
  .serviceFilterGradients {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .textAreaWithRepirTypes {
    width: 100%;
    gap: 1rem;
  }

  .cartAndButtonDiv {
    width: 50%;
  }
}

@media (max-width: 992px) {
  .cartAndButtonDiv {
    width: 95%;
    padding: 10px;
  }
}
</style>
