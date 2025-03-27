import type { ContentfulDrinkCollection } from '~/shared/models/graphql/drink.model';

import { transformContentfulDrinkCollection } from '~/shared/ultis/mapper/drink.mapper';

export const useGetDrinks = async (variables: Record<string, unknown>) => {
  const query = gql`
    query ($limit: Int, $where: DrinkFilter) {
      drinkCollection(limit: $limit, where: $where) {
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

  const { data, status } = await useAsyncQuery<{
    drinkCollection: ContentfulDrinkCollection;
  }>(query, variables);

  const drinks = computed(() => {
    return transformContentfulDrinkCollection(data.value?.drinkCollection);
  });

  return {
    drinks,
    status,
  };
};
