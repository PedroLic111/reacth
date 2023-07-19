import React from 'react'

const Componente = () => {
  return ( <h1>Componente (JSX)</h1> );
}

export default Componente


/*
import React from 'react'       ///rfce archivo es nombre de componente

function C01componente() {
  return (
    <div>
        <h3>Comoponente normal (rfce)</h3>
    </div>
  )
}

export default C01componente
*/

///Componente funcional equivalente
/*
import React from 'react' //rfc Abr, y archivo nombre de componente

export default function C01componente() {   /Tipo funcion con export
  return (
    <div>
        <h3>Componente como fn normal con expor (rfc)</h3>
    </div>
  )
}
*/


///Componente clase
/*import React, { Component } from 'react'

export default class C01componente extends Component {
  render() {
    return (
      <div>
        <h3>Componente como clase (rcc)</h3>
      </div>
    )
  }
}
*/

/*import React from 'react'     ///rafc

const C01componente = () => {
  return (
    <div>
        <h3>Componente como fn flecha abreviada y con export</h3>
    </div>
  )
}

export default C01componente
*/
