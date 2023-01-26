export const login = async (email, password) => {
  const res = await fetch(
    `https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us84.gitpod.io/api/login?email=${email}&password=${password}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        /*"Authorization": "Bearer token"*/
      },
    }
  );
  const data = await res.json();
  return data;
};