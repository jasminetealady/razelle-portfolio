<template>
  <section class="MyWork">
    <div class="wrapper">
      <Project
        title="notarize (present)"
        role="I build new features, while also focusing on component design in close collaboration with the design team, writing unit and end to end tests. Currently I specialize in accessibility ensuring an accessible product experience and have lead the project for making our product accessible. I have been responsible for splitting up, organizing, documenting, and delegating some of the work to an intern on my team."
        text="Notarize is a remote online notarization platform that allows individual signers, businesses, title agents, and lenders to notarize documents online via video meetings. We've partnered with companies such as Disney, Adobe, and more as we scale and grow."
        :projectUrl="'https://app.notarize.com/login'"
        :image="require('../assets/images/notarize.png')"
        :secondaryImage="require('../assets/images/notarize2.png')"
      />

      <Project
        title="flourish"
        role="I built the landing page in close collaboration with the design team, translating Figma specs into front end code."
        text="Flourish provides volunteer opportunities by uniquely matching you to organizations based on your passions, skills, and schedule."
        :projectUrl="'https://onflourish.org'"
        :image="require('../assets/images/flourish2.png')"
        :secondaryImage="require('../assets/images/flourish.png')"
        :tertiaryImage="require('../assets/images/flourish3.png')"
        reverse="true"
      />

      <Project
        title="my gif valentine"
        role="This was an app we created at my former digital agency for Valentine's Day. I built out the front end, collaborated on the idea for the project, and participated in design decisions to create a whimsical and fun way to celebrate Valentine's Day."
        text="Send a funny mad lib valentine with a corresponding GIF to someone you love!"
        :projectUrl="'https://mygifvalentine.com/'"
        :image="require('../assets/images/valentine.png')"
      >
        <a
          href="https://savvyapps.com/blog/why-digital-agencies-should-create-their-own-products"
          target="_blank"
          >The making of video (I talk in it a bit)</a
        >
      </Project>

      <Project
        title="the draft network portfolio page"
        role="At my former digital agency, I built out the case study page for our work on The Draft Network web app."
        text="The Draft Network case study"
        :projectUrl="'https://savvyapps.com/work/the-draft-network'"
        :image="require('../assets/images/draft-network.png')"
        reverse="true"
      />

      <Project
        title="economy vs covid"
        role="I collaborated with other developers on this project to provide people with live data shortly after the pandemic began."
        text="COVID Data Tracking"
        :projectUrl="'https://economyvscovid.us/covid/cases'"
        :image="require('../assets/images/covid.png')"
      />

      <Project
        title="gatsby portfolio site"
        text="A Gatsby portfolio site I initially created in WordPress. As a side project, I used a local WordPress instance as a back end with GraphQL to recreate the site in Gatsby."
        :projectUrl="'https://razelle.netlify.app'"
        reverse="true"
        :secondaryImage="require('../assets/images/site1.png')"
        :image="require('../assets/images/site2.png')"
      />

      <Project
        title="prismic"
        text="A server side rendered Nuxt.js site I created that pulls blog posts from the Prismic CMS."
        :projectUrl="'https://razelle-prismic.herokuapp.com/'"
        :image="require('../assets/images/prismic.png')"
      />

      <Project
        title="shahid buttar"
        text="A concept redesign of Shahid Buttar's campaign website. Not an endorsement."
        :projectUrl="'https://shahid-buttar.netlify.app'"
        :image="require('../assets/images/shahid1.png')"
        :secondaryImage="require('../assets/images/shahid.png')"
        reverse="true"
      />

      <Project
        title="cover letter builder"
        text="I try to be thoughtful and unique about my cover letters when applying to jobs. The programmer in me thought, why not automate this, while leaving open the ability to be flexible and address certain recurring themes. This is a freely editable but templated cover letter builder I created."
        :projectUrl="'https://cover-letter-builder.netlify.app'"
        :image="require('../assets/images/cover-letter.png')"
      />

      <Project
        title="voter dash"
        text="
          A voter information app with a custom API I created by aggregating data on voter registration websites and voting/mail-in dates for all 50 states for the 2019 primaries. It allows a user to enter their state or address and get that information. Now deprecated.
        "
        :projectUrl="'https://voter-info.netlify.app'"
        :image="require('../assets/images/voter.png')"
        reverse="true"
      />
    </div>
  </section>
</template>

<script>
import Project from "@/components/Project";
export default {
  components: { Project },
};
</script>

<style lang="scss">
.MyWork,
.wrapper {
  width: 100%;
}
</style>
