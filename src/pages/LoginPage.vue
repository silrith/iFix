<template>
  <div class="loginPageDiv">
    <div
      class="d-flex align-items-center flex-column justify-content-center h-100 text-dark"
      id="header"
    >
      <div class="row" id="loginForm">
        <div class="col-md-6 col-sm-12 text" id="right">
          <h2>Log into account</h2>
          <small class="mb-3"
            ><code style="font-size: 78.5% !important"
              >Use your credentials to access your account</code
            ></small
          >
          <form>
            <div class="form-group mt-3">
              <code
                for="exampleInputEmail1"
                style="
                  background: orange;
                  padding: 5px;
                  color: white !important;
                "
                >Email address</code
              >
              <input
                aria-describedby="emailHelp"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                type="email"
              />
              <small class="form-text text-muted" id="emailHelp"
                >Please enter your e-mail address above.</small
              >
            </div>
            <div class="form-group">
              <code
                for="exampleInputPassword1"
                style="
                  background: orange;
                  padding: 5px;
                  color: white !important;
                "
                >Password</code
              >
              <input
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                type="password"
              />
              <small class="form-text text-muted" id="passwordHelp"
                >Please enter your password address above.</small
              >
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group form-check">
                  <input
                    class="form-check-input"
                    id="exampleCheck1"
                    type="checkbox"
                  />
                  <small class="form-check-label" for="exampleCheck1"
                    >Remember me</small
                  >
                </div>
              </div>
              <div class="col-md-6 text-right">
                <small class="form-check-label" for="exampleCheck1"
                  >Lost password</small
                >
              </div>
            </div>
            <button id="loginButton" class="btn btn-primary" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.loginPageDiv {
  height: 85vh;
  background-image: url(https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
}
code {
  color: #000000 !important;
}

*:focus {
  box-shadow: none !important;
  outline: 0 !important;
}

input {
  border: 2px solid orange !important;
}

::-webkit-input-placeholder {
  /* Edge */
  font-size: 14px !important;
  color: orange !important;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-size: 14px !important;
  color: orange !important;
}

::placeholder {
  font-size: 14px !important;
  color: orange !important;
}

#loginButton {
  width: 100%;
  background: orange !important;
  border: none !important;
  padding: 20px !important;
}

#loginForm {
  width: 100%;
  max-width: 900px;
  margin: auto;
  box-shadow: 0px 0px 20px 20px #66666605;
  border-radius: 45px;
  background-size: cover;
  background-image: url(https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  border: 1px solid orange;
}
#loginForm div.col-md-6 {
  border-radius: 45px;
}
#loginForm #right {
  background: #f5f5f5;
  padding: 67px;
  border-left: 10px solid orange;
}

/*# sourceMappingURL=main.css.map */
</style>
