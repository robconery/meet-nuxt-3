export default defineAppConfig({
  title: 'Red:4',
  siteName: "Red:4 Aerospace",
  twitter: "@robconery",
  siteRoot: "https://redfour.io",
  entitle(name){
    return `Red:4 | ${name}`;
  }
})
