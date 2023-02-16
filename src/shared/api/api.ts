import { useEffect, useState } from "react";

export const useFetch = (params: {
  skip?: boolean;
  query?: string;
}): {
  data: any;
  loading: boolean;
  error: string | null;
} => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //   if (params.skip === true)
  //     return {
  //       data: null,
  //       loading,
  //       error,
  //     };

  const apiParams = `?page=1&per_page=3&q=${params.query}`;
  const apiUrl = `https://api.github.com/search/users${apiParams}`;
  //   console.log("apiUrl", apiUrl);

  const options = {
    method: "GET",
  };

  useEffect(() => {
    console.log("Starting fetch");
    if (params.skip === false) {
      setLoading(true);
      fetch(apiUrl, options)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => {
          setError(err);
          console.log("err", err);
        })
        .finally(() => setLoading(false));
    }
    // async () => {
    //   try {
    //     setLoading(true);
    //     const response = await fetch(apiUrl, options).then((res) => res.json());
    //     console.log("response", response);

    //     setData(response?.items);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log("error", error);

    //     setError(error);
    //     setLoading(false);
    //   }
    // };
  }, [params.query]);

  return {
    data,
    loading,
    error,
  };
};
