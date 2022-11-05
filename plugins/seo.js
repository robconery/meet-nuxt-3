export default defineNuxtPlugin(nuxtApp => {  
  

  nuxtApp.provide("seo", function(page) {
    const config = useAppConfig();
    const title = `${config.title} | ${page.title}`;
    const route = useRoute();
    return {
      title: title,
      meta:[
        {hid: "title", name: "title", content: title},
        {hid: "description", name: "description", content: page.description},
        {hid: "og:title", name: "og:title", content: title},
        {hid: "og:description", name: "og:description", content: page.description},
        {hid: "og:image", name: "og:image", content:  `${config.siteRoot}/images/${page.image}`},
        {hid: "og:url", name: "og:url", content: `${config.siteRoot}/${route.path}`},
        {hid: "twitter:title", name: "twitter:title", content: title},
        {hid: "twitter:description", name: "twitter:description", content: page.description},
        {hid: "twitter:image", name: "twitter:image", content: `${config.siteRoot}/images/${page.image}`},
        {hid: "twitter:creator", name: "twitter:creator", content: config.twitter},
        {hid: "twitter:site", name: "twitter:site", content: config.twitter},
        {hid: "twitter:card", name: "twitter:card", content: "summary_large_image"}
      ]
    }
  });
});