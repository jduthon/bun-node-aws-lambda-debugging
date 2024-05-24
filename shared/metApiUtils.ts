type SearchResult = {
  total: number;
  objectIDs: number[];
};

const isSearchResult = (
  potentialSearchResult: unknown
): potentialSearchResult is SearchResult => {
  if (typeof potentialSearchResult !== "object") {
    return false;
  }
  const castedPotentialSearchResult = potentialSearchResult as SearchResult;
  const { objectIDs, total } = castedPotentialSearchResult;
  return (
    typeof total === "number" &&
    Array.isArray(objectIDs) &&
    objectIDs.every((objectID) => typeof objectID === "number")
  );
};

const search = async (query: string) => {
  const searchUrl = new URL(
    "https://collectionapi.metmuseum.org/public/collection/v1/search"
  );
  searchUrl.search = new URLSearchParams({ q: query }).toString();
  let response: Response;
  try {
    response = await fetch(searchUrl);
  } catch (error) {
    console.error("Error fetching search endpoint", error);
    return;
  }
  if (!response.ok) {
    return;
  }
  try {
    const potentialSearchResult = await response.json();
    if (!isSearchResult(potentialSearchResult)) {
      throw new Error(
        `Invalid search result ${JSON.stringify(potentialSearchResult)}`
      );
    }
    return potentialSearchResult;
  } catch (error) {
    console.error("Error parsing search result", error);
  }
};

type MetObject = {
  objectID: number;
  primaryImage: string;
  objectName: string;
  title: string;
  artistDisplayName: string;
  objectDate: string;
};

const isMetObject = (
  potentialMetObject: unknown
): potentialMetObject is MetObject => {
  if (typeof potentialMetObject !== "object") {
    return false;
  }
  const castedPotentialSearchResult = potentialMetObject as MetObject;
  const {
    objectID,
    primaryImage,
    objectName,
    title,
    artistDisplayName,
    objectDate,
  } = castedPotentialSearchResult;
  return (
    typeof objectID === "number" &&
    typeof primaryImage === "string" &&
    typeof objectName === "string" &&
    typeof title === "string" &&
    typeof artistDisplayName === "string" &&
    typeof objectDate === "string"
  );
};

const getObject = async (objectID: number) => {
  const objectURL = new URL(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
  );
  let response: Response;
  try {
    response = await fetch(objectURL);
  } catch (error) {
    console.error("Error fetching object endpoint", error);
    return;
  }
  if (!response.ok) {
    return;
  }
  try {
    const potentialMetObject = await response.json();
    if (!isMetObject(potentialMetObject)) {
      throw new Error(
        `Invalid object result ${JSON.stringify(potentialMetObject)}`
      );
    }
    return potentialMetObject;
  } catch (error) {
    console.error("Error parsing object result", error);
  }
};

export const getRandomSunflowerArt = async () => {
  const searchResult = await search("sunflower");
  if (!searchResult) {
    return;
  }
  const selectedObjectId =
    searchResult.objectIDs[Math.floor(searchResult.objectIDs.length * 0.5)];
  if (!selectedObjectId) {
    return;
  }
  return getObject(selectedObjectId);
};

export const displayMetObject = (metObject: MetObject) => `
<div>
  <img src="${metObject.primaryImage}" aria-hidden height="200px" width="200px" />
  <div>
    ${metObject.title} - ${metObject.artistDisplayName}
  </div>
  <div>
    ${metObject.objectDate}
  </div>
</div>
`;
