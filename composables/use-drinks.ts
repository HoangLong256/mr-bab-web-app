import type { ContentfulDrinkCollection } from "~/shared/models/graphql/drink.model";
import { transformContentfulDrinkCollection } from "~/shared/ultis/mapper/drink.mapper";

const useGetDrinks = async (variables: Record<string, any>) => {
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

  const { data, status } = await useAsyncQuery<ContentfulDrinkCollection>(
    query,
    variables
  );

  const drinks = computed(() => {
    return transformContentfulDrinkCollection(data?.value || undefined);
  });

  return {
    drinks,
    status,
  };
};

export const useGetDrinkById = async (id: string) => {
  return useGetDrinks({
    limit: 1,
    where: {
      _id: id,
    },
  });
};

export const useGetDrinkByTitle = async (title: string) => {
  return useGetDrinks({
    limit: 1,
    where: {
      title,
    },
  });
};
