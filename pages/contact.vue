<template>
  <main>
    <div class="left">
      <h1>Contact</h1>
      <p class="text-xl">
        If you'd like to learn more about my services and pricing, please visit the
        <a href="/services">Services</a> page. If you'd like to book, please call or text
        <a href="tel:19403674447">940-367-4447</a>. For all other questions, please use the form below.
      </p>
      <br />
      <form action="action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your first name.." />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label for="subject">Message</label>
        <textarea id="subject" name="subject" placeholder="How can I help?" style="height: 200px"></textarea>

        <input class="btn" type="submit" value="Send" />
      </form>
    </div>
    <div class="right"></div>
  </main>
</template>

<style lang="postcss" scoped>
main {
  @apply flex w-full place-content-center justify-between flex-row bg-primary-800;

  .left {
    @apply w-2/3 p-16;
  }

  .right {
    @apply w-1/3;
    background: url('~/static/img/272635619_1066555204138398_2314852005810391912_n.jpg') no-repeat center center;
    background-size: cover;
  }

  h1 {
    @apply pb-4;
  }
}
/* Style inputs with type="text", select elements and textareas */
input[type='text'],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type='submit'] {
  @apply text-xl bg-accent py-4 px-6 cursor-pointer text-primary-900;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type='submit']:hover {
  @apply bg-white;
}
</style>

<script>
export default {}
</script>