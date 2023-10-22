<template>
  <div class="timeToShipDiv">
    <div class="checkOutHeaderDiv">
      <p class="checkOutHeader">{{ this.$t("timetoship.header1") }}</p>
      <p class="checkOutHeader">
        {{ this.$t("timetoship.header2") }}
        <span style="color: #f26d25"> {{ this.$t("timetoship.header3") }}</span>
      </p>
      <p class="txt2" style="font-size: 15px; font-weight: 600">
        {{ this.$t("timetoship.subtitle1") }}
      </p>
    </div>
    <div class="mandatoryDisclosures">
      <div class="shippingButtonDiv">
        <div class="container-login102-form-btnShip">
          <button class="btn btn-block py-2 btn-loginShip" @click="createPdf">
            {{ this.$t("timetoship.button") }}
          </button>
        </div>
      </div>
      <div class="orderedListDiv">
        <p class="txt2" style="color: black; font-weight: 600">
          {{ this.$t("timetoship.dataheader1") }}
        </p>
        <ol>
          <li class="txt2">
            {{ this.$t("timetoship.datasubtitle11") }}
          </li>
          <li class="txt2">
            {{ this.$t("timetoship.datasubtitle12") }}
          </li>
          <li class="txt2">{{ this.$t("timetoship.datasubtitle13") }}</li>
          <li class="txt2">{{ this.$t("timetoship.datasubtitle14") }}</li>
        </ol>
      </div>
      <div class="checkOutHeaderDivShip">
        <p class="txt2" style="color: black; font-weight: 600">
          {{ this.$t("timetoship.dataheader2") }}
        </p>
        <ul>
          <li class="txt2">
            {{ this.$t("timetoship.datasubtitle21") }}
          </li>
          <li class="txt2">
            {{ this.$t("timetoship.datasubtitle22") }}
          </li>
          <li class="txt2">
            {{ this.$t("timetoship.datasubtitle23") }}
          </li>
          <li class="txt2">
            {{ this.$t("timetoship.datasubtitle24") }}
          </li>
          <li class="txt2">
            {{ this.$t("timetoship.datasubtitle25") }}
          </li>
        </ul>
      </div>
      <div class="shipArrive">
        <p class="txt2" style="color: black; font-weight: 600">
          {{ this.$t("timetoship.dataheader3") }}
        </p>
        <p class="txt2">
          {{ this.$t("timetoship.datasubtitle31") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      pdfData: null,
    };
  },
  methods: {
    createPdf() {
      var base64String = localStorage.getItem("pdf");
      if (base64String) {
        const byteCharacters = atob(base64String);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "application/pdf" });
        const blobUrl = URL.createObjectURL(blob);
        window.open(blobUrl, "_blank");
      }
    },
    updateOrderPaymentStatusAsSuccess() {
      this.$ajax
        .put("Payment/UpdateMailInOrderPaymentStatus/"+this.$route.query.mioi,)
        .then((snapshot) => {
          alert(snapshot.data);
        })
        .catch((err) => {
          toast.error(this.$t("checkoutinstore.selectTime"), {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "foo-bar",
            toastStyle: {
              fontSize: "12px",
            },
          });
        });
    },
  },
  mounted() {
    this.updateOrderPaymentStatusAsSuccess();
  },
};
</script>

<style>
.timeToShipDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-family: Poppins-medium;
}

.checkOutHeaderDiv {
  padding: 53px 0 0 0;
}

.checkOutHeader {
  width: 100%;
  font-family: Poppins-bold;
  font-size: 50px;
  line-height: 1;
}

.mandatoryDisclosures {
  width: 50%;
  height: 550px;
  overflow-y: scroll;
  background-image: url("@/assets/photos/cargo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 25%;
}

.orderedListDiv {
  text-shadow: 0 1px #808d93;
  padding: 15px;
}

.shippingButtonDiv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: white;
}

.container-login102-form-btnShip {
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0 10px 0;
  border: none;
  padding: 15px;
}

.btn-loginShip {
  background-color: #f26d25;
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
}

.btn-loginShip:hover {
  background-color: #333333;
  color: #fff;
}

.checkOutHeaderDivShip {
  text-shadow: 0 1px #808d93;
  padding: 15px;
}

.shipArrive {
  text-shadow: 0 1px #808d93;
  padding: 15px;
}

@media (max-width: 1378px) {
  .container-login102-form-btnShip {
    width: 50%;
  }
}

@media (max-width: 992px) {
  .mandatoryDisclosures {
    width: 80%;
  }
}

@media (max-width: 772px) {
  .checkOutHeaderDiv {
    text-align: center;
  }

  .checkOutHeader {
    font-size: 30px;
  }

  .container-login102-form-btnShip {
    width: 60%;
  }
}
</style>
