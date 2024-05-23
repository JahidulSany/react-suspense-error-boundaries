let cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  if (url.includes('/comments')) {
    return await getComments(url);
  } else {
    throw Error('Not implemented');
  }
}

async function getComments(url) {
  const result = await fetch(url);
  const comments = await result.json();
  return comments;
}
