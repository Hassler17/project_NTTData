import React from "react";
import './UserInfo.css';
import { useNavigate, useParams } from 'react-router-dom';


const UserInfo = () => {

  let { id, type } = useParams();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState(null)



  const getUser = async() => {
    if (!userInfo) {
      
    }
   await fetch('/data/users.json')
      .then(response => response.json())
      .then(data => {
        const user= data.find((item) => item.identifition === id.replace(/\./g, '' && item.typeIdentification === type))
        setUserInfo(user)
      })
      .catch((error) => console.error('error :>> ', error))
  }


  React.useEffect(() => {
    getUser()
  }, [id])

  return (
    <div class="container centerPanel">
      <legend class="text-center header">Informacion Basica</legend>
      {userInfo ?
        <form class=" shadow-lg p-3 mt-4 bg-body rounded">

          <div class="form-group  mb-3 col-12">
            <label for="zip_id" class="control-label">Primer Apellido</label>
            <input value={userInfo.lastName} class="form-control" disabled />
          </div>

          <div class="form-group  mb-3 col-12">
            <label for="zip_id" class="control-label">Primer Nombre</label>
            <input value={userInfo.firstName} class="form-control" disabled />
          </div>

          <div class="form-group col-12 mb-1 centerIntems">
            <button type="button" onClick={() => navigate("/")} class="btn btn-primary btn-md" >Regresar</button>
          </div>

        </form>
        :
        <div class="container centerNoResults">
          <br />
          <br />
          <div class="centerIntems">

            <img src="/icons8-borrar-búsqueda-96.png" alt="icons"></img>
          </div>
          <legend class="text-center header">No hemos encontrado resultados que tengan relacion con los datos ingresados</legend>
        </div>
      }

    </div>
  )

}
export default UserInfo;