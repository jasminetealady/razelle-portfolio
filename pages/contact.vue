<template>
  <div class="contact page">
    <form :class="$mq" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />

      <label>Your Name:</label>
      <input type="text" name="name" />

      <label>Your Email:</label>
      <input type="email" name="email" />

      <label>Message:</label>
      <textarea name="message" />

      <button type="submit">Send</button>
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

    &.sm {
      width: 80%;
    }

    &.md {
      width: 400px;
    }

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
      font-family: $mono;
      font-size: 14px;
      color: $lavender;
    }

    textarea:focus,
    input:focus,
    input[type]:focus,
    .uneditable-input:focus,
    input:-internal-autofill-selected {
      border-color: $lavender;
      box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1) inset, 0 0 8px $lavender;
      outline: 0 none;
    }

    button {
      background: $lavender;
      color: #fff;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 3px;
      font-size: 16px;
      font-family: $mono;
      margin-top: 2rem;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border: 1px solid $lavender;
      -webkit-text-fill-color: $lavender;
      -webkit-box-shadow: 0 0 0px 1000px #fff inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
}
</style>