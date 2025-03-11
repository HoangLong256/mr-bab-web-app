<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page</p>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
const query = gql`
  query {
    drinkCollection {
      items {
        title
        price
        size
        sugarLevel
        toppingsCollection {
          items {
            _id
            title
            price
          }
        }
      }
    }
  }
`;

const variables = { limit: 5 };
const { data } = await useAsyncQuery(query, variables);

useHead({
  title: "Home Page",
});
</script>
