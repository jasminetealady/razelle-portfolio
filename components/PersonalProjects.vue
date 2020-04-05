<template>
  <section class="MyWork">
    <h1>projects</h1>
    <div class="wrapper">
      <Project
        :title="'voter dash'"
        :text="`Voter dash is a voter information app with a custom API that provides information on voter registration deadlines and the website to check voter registration in the user's state. It also implements the Google Civic Info API to provide data on active elections. I created this app with the intention to help voters access data about their elections more readily in a user friendly environment.`"
        :projectUrl="'https://voter-info.netlify.com'"
      />
    </div>
  </section>
</template>

<script>
import Project from '@/components/Project'
export default {
  components: { Project }
}
</script>

