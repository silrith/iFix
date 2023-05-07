<template>
  <div class="contactUsContainer mt-2 col-10">
    <form class="col-12" action=" " id="contact_form">
      <div class="contactUsForm row">
        <h1>{{ $t("header.contactUs") }} !</h1>
        <div class="contactUsLeft col-6">
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.firstName") }}</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <input
                  name="first_name"
                  placeholder="First Name"
                  class="form-control"
                  type="text"
                  required
                  oninvalid="setCustomValidity(this.errorMessage)"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.lastName") }}</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <input
                  name="last_name"
                  placeholder="Last Name"
                  class="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.email") }}</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-envelope"></i
                ></span>
                <input
                  name="email"
                  placeholder="E-Mail Address"
                  class="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.phone") }}</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-earphone"></i
                ></span>
                <input
                  name="phone"
                  placeholder="(845)555-1212"
                  class="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="contactUsRight col-6">
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.address") }}</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-home"></i
                ></span>
                <input
                  name="address"
                  placeholder="Address"
                  class="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.city") }}</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-home"></i
                ></span>
                <input
                  name="city"
                  placeholder="city"
                  class="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.state") }}</label>
            <div class="selectContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-list"></i
                ></span>
                <select name="state" class="form-control selectpicker">
                  <option>Please select your state</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Colorado</option>
                  <option>Connecticut</option>
                  <option>Delaware</option>
                  <option>District of Columbia</option>
                  <option>Florida</option>
                  <option>Georgia</option>
                  <option>Hawaii</option>
                  <option>daho</option>
                  <option>Illinois</option>
                  <option>Indiana</option>
                  <option>Iowa</option>
                  <option>Kansas</option>
                  <option>Kentucky</option>
                  <option>Louisiana</option>
                  <option>Maine</option>
                  <option>Maryland</option>
                  <option>Mass</option>
                  <option>Michigan</option>
                  <option>Minnesota</option>
                  <option>Mississippi</option>
                  <option>Missouri</option>
                  <option>Montana</option>
                  <option>Nebraska</option>
                  <option>Nevada</option>
                  <option>New Hampshire</option>
                  <option>New Jersey</option>
                  <option>New Mexico</option>
                  <option>New York</option>
                  <option>North Carolina</option>
                  <option>North Dakota</option>
                  <option>Ohio</option>
                  <option>Oklahoma</option>
                  <option>Oregon</option>
                  <option>Pennsylvania</option>
                  <option>Rhode Island</option>
                  <option>South Carolina</option>
                  <option>South Dakota</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Uttah</option>
                  <option>Vermont</option>
                  <option>Virginia</option>
                  <option>Washington</option>
                  <option>West Virginia</option>
                  <option>Wisconsin</option>
                  <option>Wyoming</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">{{ $t("userForm.zipCode") }}</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-home"></i
                ></span>
                <input
                  name="zip"
                  placeholder="Zip Code"
                  class="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="contactUsButtonDiv">
          <div class="form-group">
            <label class="control-label"></label>
            <div>
              <button type="submit" class="btn btn-warning">
                {{ $t("buttons.send") }}
                <span class="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: this.$t("userForm.firstNameRequired"),
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
#success_message {
  display: none;
}

.contactUsContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 66vh;
}

.contactUsForm {
  display: flex;
}

.contactUsButtonDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.contactUsContainer input::placeholder {
  font-size: 14px !important;
  color: orange !important;
}

.contactUsContainer select {
  font-size: 14px !important;
  color: orange !important;
}
</style>
