import './assets/GaleriaInstagram.css'
import { useState } from 'react'

export default function GaleriaInstagram( { lista } ) {

    let eKey = 0

    const [ mostrarImagen, setMostrarImagen ] = useState(false)
    const [ imagenModal, setImagenModal ] = useState( lista[0] )

    return (
        <div className="GaleriaInstagram">
            { lista.map( imagen => {
                eKey++
                return (
                    <div
                        key={ eKey } className="GaleriaInstagram__foto" 
                        onClick={ () => {
                            setMostrarImagen(!mostrarImagen)
                            setImagenModal(imagen)
                        } }>
                        {imagen}
                    </div>
                )
            })}
            { (mostrarImagen)
              ?<div className="GaleriaInstagram__modal">
                  <div className="GaleriaInstagram__modal__cerrar"  onClick={ () => setMostrarImagen(!mostrarImagen)}>
                    <div className="GaleriaInstagram__modal__cerrar__tache"  onClick={ () => setMostrarImagen(!mostrarImagen)}>X
                    </div>
                  </div>
                  <div className="GaleriaInstagram__modal__foto" onClick={ () => {}}>
                      { imagenModal
                      }
                  </div>
                  <div className="GaleriaInstagram__modal__foto__derecha"
                    onClick={ () => {
                        let indice = lista.indexOf(imagenModal)
                        if (indice === lista.length - 1) {
                            setImagenModal(lista[0])
                            return
                        }
                        indice++
                        setImagenModal(lista[indice])
                        
                    }}>
                        <p>+</p>
                  </div>
                  <div className="GaleriaInstagram__modal__foto__izquierda"
                    onClick={ () => {
                        let indice = lista.indexOf(imagenModal)
                        console.log(indice)
                        if (indice === 0 ) {
                            setImagenModal(lista[ lista.length - 1 ])
                            console.log(indice)
                            return
                        }
                        indice--
                        setImagenModal(lista[indice])
                    }}>
                    <p>-</p>
                  </div>
              </div>
              : null
            }
        </div>
    )
}