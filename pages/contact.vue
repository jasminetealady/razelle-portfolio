<template>
  <div class="contact page">
    <h1 class="title">Contact</h1>
    <div class="content">
      <form name="contact" action method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <label class="form-label" for="name">Name:</label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">Email:</label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">Message:</label>
        <textarea class="form-field" name="message" id="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
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