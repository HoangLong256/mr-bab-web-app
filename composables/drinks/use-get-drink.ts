import type { ContentfulDrink } from "~/shared/models/graphql/drink.model";
import { transformContentfulDrink } from "~/shared/ultis/mapper/drink.mapper";

const useGetDrink = async (variables: Record<string, any>) => {
  const query = gql`
    query drink($id: String!) {
      drink(id: $id) {
        _id
        title
        price
        size
        iceLevel
        sugarLevel
        imagesCollection {
          items {
            fileName
          }
        }
        toppingsCollection {
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
    }
  `;

  const { data, status } = await useAsyncQuery<{
    drink: ContentfulDrink;
  }>(query, variables);

  const drink = computed(() => {
    return transformContentfulDrink(data.value?.drink);
  });

  return {
    drink,
    status,
  };
};

export const useGetDrinkById = async (id: string) => {
  return useGetDrink({
    id: id,
  });
};
