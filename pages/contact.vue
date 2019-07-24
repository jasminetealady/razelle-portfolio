<template>
  <div class="contact page">
    <template>
      <form>
        <p>
          <label>
            Your Name:
            <input type="text" name="name" v-model="form.name" />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input type="email" name="email" v-model="form.email" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <textarea name="message" v-model="form.message" />
          </label>
        </p>
        <p>
          <button type="submit" @click.prevent="handleSubmit">Send</button>
        </p>
      </form>
    </template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "contact", ...this.form })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/main.scss";
.contact {
  @include flex-center(column);

  form {
    @extend .contact;
    text-align: center;
    width: 500px;

    p {
      width: 100%;
    }

    label {
      display: block;
      margin: 2rem 0;
    }

    textarea {
      @extend input;
      resize: none;
      height: 100px;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 3px;
      border: solid 1px rgba(0, 0, 0, 0.1);
    }

    input[type="submit"] {
      background: $lavender;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 3px;
      font-size: 16px;
      font-family: $mono;
      margin-top: 2rem;
    }
  }
}
</style>