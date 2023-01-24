import { useState, useEffect } from "react";

// 4 - custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading

  const [loading, setLoading] = useState(false);

  // 7 - tratando erros 
  const [error, setError] = useState(null);

  //8 - desafio


  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      setMethod(method);
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json"
        }
      });
      setMethod(method)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // 6 - loading
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError('Houve algum erro ao carregar os dados...')
      }
      setLoading(false);
    };

    fetchData();

  }, [url, callFetch]);

  // 5 - refatorando post

  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);

      } else if (method === 'DELETE') {

        let deleteURL = url;
        const res = await fetch(deleteURL, config);
        const json = await res.json();
        setCallFetch(json);
      }
    }
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};