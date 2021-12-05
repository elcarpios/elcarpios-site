import { defineNuxtPlugin } from '#app';
import VueGtag from 'vue-gtag-next';

const setAnalytics = (vueApp) => {
  vueApp.use(VueGtag, {
    useDebugger: false,
    property: {
      id: 'UA-184825434-1',
      params: {
        send_page_view: false
      }
    }
  });
};

const setErrorHandler = (vueApp) => {
  vueApp.config.errorHandler = (description) => {
    vueApp.config.globalProperties.$gtag.exception({
      description, fatal: true
    });
  };
};

export default defineNuxtPlugin(({ vueApp }) => {
  setAnalytics(vueApp);
  setErrorHandler(vueApp);
})