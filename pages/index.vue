<template>
  <div class="Index">
    <Sidebar />

    <main class="page">
      <MyWork />
      <PersonalProjects />
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import MyWork from '@/components/MyWork'
import PersonalProjects from '@/components/PersonalProjects'

export default {
  components: { Sidebar, MyWork, PersonalProjects }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
@import '../assets/scss/_breakpoints.scss';

.Index {
  display: flex;
  min-height: 100vh;
  width: 100%;

  @include sm() {
    flex-direction: column;
  }
}
</style>