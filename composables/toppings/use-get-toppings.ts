import type { ContentfulToppingCollection } from '~/shared/models/graphql/topping.model';

import { transformContentfulToppingCollection } from '~/shared/ultis/mapper/topping.mapper';

export const useGetToppings = async (variables: Record<string, unknown>) => {
  const query = gql`
    query ($limit: Int, $where: ToppingFilter) {
      toppingCollection(limit: $limit, where: $where) {
        items {
          _id
          title
          description
          price
          image {
            fileName
          }
        }
      }
    }
  `;

  const { data, status } = await useAsyncQuery<{
    toppingCollection: ContentfulToppingCollection;
  }>(query, variables);

  const toppings = computed(() => {
    return transformContentfulToppingCollection(data.value?.toppingCollection);
  });

  return {
    status,
    toppings,
  };
};
