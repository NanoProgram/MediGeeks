import React from 'react'

export const Five = () => {
  return (

    <div className='row' style={{display: "flex" ,justifyContent:"center"}}>
      <div className='col-4'>
      <h2 style={{ textAlign: "center" }}>Contactenos</h2>
      <br />
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Nombre</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Telefono</label>
      </div>
      <br />
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Commentarios</label>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" class="btn btn-primary">Enviar</button>
      </div>
</div>
    </div>

  )
}
