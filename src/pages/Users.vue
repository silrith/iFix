<template>
  <div>
    <div>
      <input type="file" id="input" @change="onInputChange" />
      <img :src="imageUrl" alt="Resim" id="img" />
    </div>
    <table class="table table-hover table-responsive col-12">
      <thead>
        <tr class="table-dark border-1">
          <th scope="col">#</th>
          <th scope="col">Profile Picture</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Password</th>
          <th scope="col">Operation</th>
          <th scope="col">Operation</th>
          <th scope="col">Operation</th>
          <th scope="col">Operation</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-secondary">
          <th scope="row">1</th>
          <td>user</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>mark@mdo</td>
          <td>+3009856485</td>
          <td>+3009856485</td>
          <td>+3009856485</td>
          <td>{{ new Date() }}</td>
          <td>+3009856485</td>
          <td><input type="password" value="123123" /></td>
          <td>
            <button class="button-17">Save</button>
            <button class="button-17">Delete</button>
          </td>
        </tr>
        <tr class="table-secondary">
          <th scope="row">2</th>
          <td>user</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>jacob@fat</td>
          <td>jacob@fat</td>
          <td>jacob@fat</td>
          <td>+456878912</td>
          <td>{{ new Date() }}</td>
          <td>+3009856485</td>
          <td><input type="password" value="123123" /></td>
          <td>
            <button class="button-17">Save</button>
            <button class="button-17">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "", // Resim URL'si için bir veri alanı
    };
  },
  methods: {
    onInputChange(e) {
      if (e.target.files[0]) {
        this.imageUrl = URL.createObjectURL(e.target.files[0]);
      }
    },
  },
};
</script>
