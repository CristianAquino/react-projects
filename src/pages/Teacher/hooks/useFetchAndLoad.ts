import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Props<T> = {
  call: Promise<AxiosResponse<T>>;
  controller: AbortController;
};

function useFetchAndLoad() {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  async function callEndpoint(endpoint: Props<any>) {
    if (endpoint.controller) controller = endpoint.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;
    try {
      result = await endpoint.call;
    } catch (e) {}
    setLoading(false);
    return result;
  }

  function cancelEndpoint() {
    setLoading(false);
    controller && controller.abort();
  }

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
}

export { useFetchAndLoad };
