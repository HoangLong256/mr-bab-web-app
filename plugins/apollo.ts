export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("apollo:auth", ({ client, token }) => {
    // `client` can be used to differentiate logic on a per client basis.

    // apply apollo client token
    // TODO: Handle the secure logic here
    token.value = "";
  });
});
