export const httpPOSTFile = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      authorization: localStorage.getItem("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data,
  });
  return response;
};
