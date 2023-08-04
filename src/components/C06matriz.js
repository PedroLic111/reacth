import React, {useState, Fragment} from 'react'

const C06matriz = () => {

    const [lista, setLista] = useState([1,2,3,4,5]);

  return (
    <Fragment>
        <h1>COMPONENTE 1</h1>
        <h1>Lectura sin index sin html</h1>
        {lista.map((item) => item)}
        <br/>

        <h1>Lectura sin index con html</h1>
        {lista.map((item) => <span> {item} </span>)} 
        <br/>

        <h1>Listas con index sin key</h1>
        {
            lista.map((item, index) => 
                <p> {item} </p>
            )
        }
        <br/>

        <h1>Listas con index con key</h1>
        {
            lista.map((item,index) =>
                <p key = {index}>
                    {item} - {index}
                </p>
            )
        }
    </Fragment>
  )
}

export default C06matriz
