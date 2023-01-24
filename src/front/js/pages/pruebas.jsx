import React, { useState, useEffect } from "react";

export const Prueba = () => {
  const [specialties, setSpecialties] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realizar consulta Fetch para obtener datos de la base de datos
    fetch(
      "https://3001-nanoprogram-medigeeks-qieayu3bvm3.ws-us83.gitpod.io/api/mediGeeks/specialitys"
    )
      .then((res) => res.json())
      .then((data) => {
        setSpecialties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="m-3">
      <select
        className="form-select form-select-sm mb-3s m-1"
        aria-label=".form-select-sm example"
        style={{ width: "150px" }}
      >
        <option selected>Especialidad</option>
        {specialties.map((specialty) => (
          <option value={specialty.id}>{specialty.name}</option>
        ))}
      </select>

      <select
        className="form-select form-select-sm mb-3s m-1"
        aria-label=".form-select-sm example"
        style={{ width: "150px" }}
      >
        <option selected>Comuna</option>
        {communities.map((community) => (
          <option value={community.id}>{community.name}</option>
        ))}
      </select>

      <select
        className="form-select form-select-sm mb-3s m-1"
        aria-label=".form-select-sm example"
        style={{ width: "150px" }}
      >
        <option selected>Centro Medico</option>
        {medicalCenters.map((center) => (
          <option value={center.id}>{center.name}</option>
        ))}
      </select>

      <select
        className="form-select form-select-sm mb-3s m-1"
        aria-label=".form-select-sm example"
        style={{ width: "150px" }}
      >
        <option selected>Doc</option>
        {doctors.map((doctor) => (
          <option value={doctor.id}>{doctor.name}</option>
        ))}
      </select>
    </div>
  );
};
