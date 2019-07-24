<template>
  <div class="contact page">
    <form method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message:
          <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>


<script>
export default {};
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