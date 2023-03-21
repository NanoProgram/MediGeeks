const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user_id: null,
      calendarID: null,
      dataIds: null,
      comprobante: {
        doctor: null,
        centro: null,
        especialidad: null,
        hora: null,
        dia: null,
        mes: null,
      },
    },
    actions: {
      login: async (email, password) => {
        await fetch(
          "https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/login?email=${email}&password=${password}",

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
      saveData: async (calendarID) => {
        const user_id = localStorage.getItem("user_id");
        const available = false;
        const data = { user_id, available };
        try {
          const response = await fetch(
            `https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/mediGeeks/appointments/${calendarID}`,
            {
              method: "PUT",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const json = await response.json();
          setStore({ calendarID: calendarID });
          console.log(json);
        } catch (error) {
          console.error("Error:", error);
        }
      },
      center: async (calendarID) => {
        try {
          const response = await fetch(
            `https://3001-nanoprogram-medigeeks-mww1bt06jmk.ws-us89b.gitpod.io/api/mediGeeks/appointments/${calendarID}`,
            {
              method: "GET",
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await response.json();
          console.log(data);
          setStore({ dataIds: data });
        } catch (error) {
          console.error(error);
        }
      },
      setComprobante: async (comprobante) => {
        await setStore({ comprobante });
        console.log(comprobante);
      },
    },
  };
};

export default getState;
