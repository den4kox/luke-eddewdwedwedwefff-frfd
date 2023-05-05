import localforage from "localforage";

export async function cachedFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const cacheKey = `${url}_${JSON.stringify(options)}`;

  // const cachedResponse: T | null = await localforage.getItem<T>(cacheKey);

  // if (cachedResponse !== null) {
  //   return cachedResponse;
  // }

  const response = await fetch(url, options);

  if (response.ok) {
    const data: T = await response.json();

    // await localforage.setItem<T>(cacheKey, data);

    return data;
  } else {
    throw new Error("Request failed");
  }
}
