

export function Login() {
  return (
    <div className="container-registro">
      <div>
        <h2 className="titulo-app">Registro de Personas</h2>
        <p className="parrafo-app">Completa los datos para crear un usuario</p>
      </div>
      <form className="formulario">
        <div>
          <input className="input-registro" placeholder="Nombre" type="text" id="nombre" />

          <input className="input-registro" placeholder="Apellido" type="text" id="apellido" />
        </div>

        <div>
          <input className="input-registro" placeholder="Documento" type="text" id="documento" />

          <input className="input-registro" placeholder="Edad" type="text" id="edad" />
        </div>


        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <input className="input-registro" placeholder="Nacionalidad" type="text" id="nacionalidad" />
          <div className="inputs-radio">
            <input className="" name="sexo" type="radio" value={"masculino"} /> Masculino
            <br />
            <input className="" name="sexo" type="radio" value={"femenino"} /> Femenino
          </div>
        </div>

        <button className="btn-agregar">Agregar persona</button>

      </form>
    </div>
  );
}
