export const useDrinks = async () => {
  const query = gql`
    query {
      drinkCollection {
        items {
          _id
          title
          size
          iceLevel
          sugarLevel
        }
      }
    }
  `;

  const { data } = await useAsyncQuery(query);

  return {
    data,
  };
};
