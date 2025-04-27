import {useQuery} from "@tanstack/react-query";
import SearchByQuery from "@/services/Product/SearchByQuery";

const useSearchByQuery = (query: string) => {
  return useQuery(({
    queryKey: ['ProductQuery'],
    queryFn: () => SearchByQuery(query)
  }))
}
export default useSearchByQuery;