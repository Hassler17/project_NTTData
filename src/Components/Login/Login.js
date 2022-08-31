import React from "react";
import './Login.css';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [info, setInfo] = React.useState({
    identification: null,
    typeIdentification: null,

  })
  const formatInput = (value) => {
    const newValor = value.replace(/\D/g, "")
      .replace(/([0-9])([0-9]{2})$/, '$1.$2')
      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
    setInfo({
      ...info,
      identification: newValor
    })

  }

  const validationCharts = (value) => {
    if (value.length < 10) {
      enqueueSnackbar('Faltan caracteres', { variant: 'error', horizontal: 'error' })
    }
  }
  

  return (
    <div class="container centerPanel">
        <legend class="text-center header">Login</legend>
      <form class=" shadow-lg p-3 mt-4 bg-body rounded">

        <div class="form-group  mb-3 col-12">
          <label for="state_id" class="control-label">Tipo de documento</label>
          <select onChange={(e) => setInfo({ ...info, typeIdentification: e.target.value })} value={info.typeIdentification} name="typeIdentification" class="form-select" aria-label="Default select example" id="state_id">
            <option selected>Seleccione una opcion</option>
            <option value="CC">Cedula de ciudadanía</option>
            <option value="DNI">Pasaporte</option>
          </select>
        </div>

        <div class="form-group  mb-3 col-12">
          <label for="zip_id" class="control-label">Número de documento</label>
          <input onBlur={(e) => validationCharts(e.target.value)} maxlength="14" onChange={(e) => formatInput(String(e.target.value))} value={info.identification} class="form-control" id="identification" name="identification" placeholder="Número de 8 a 11 caracteres" />
        </div>

        <div class="form-group col-12 mb-1 centerIntems">
          <button type="button" onClick={(e) => navigate(`/userInfo/${info.identification.replace(/,/g, '')}/${info.typeIdentification}`)} class="btn btn-primary btn-md" disabled={info.identification && info.identification.length >= 10 && info.typeIdentification !== null ? false : true}>Consultar</button>
        </div>
      </form>
    </div>
  )

}
export default login;