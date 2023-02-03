const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user_id: null,
    },
    actions: {
      login: async (email, password) => {
        await fetch(
          "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us85.gitpod.io/api/login?email=${email}&password=${password}",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              // guardar el token en el almacenamiento local o en el estado de la aplicación
              localStorage.setItem("token", data.token);
              console.log("Logueado correctamente");
              setStore({ user_id: data.user_id });
              localStorage.setItem("user_id", data.user_id);
            } else {
              console.log("No se recive token");
              // manejar el error de autenticación
            }
          })
          .catch((error) => console.log(error));
      },
      logout: () => {
        console.log("llamando a logout");
        localStorage.clear();
        setStore({ user_id: null });
      },
    },
  };
};

export default getState;
