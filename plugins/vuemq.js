import Vue from 'vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 664,
    md: 1025,
    lg: 1240,
    desktop: Infinity
  },
  defaultBreakpoint: 'sm'
});
