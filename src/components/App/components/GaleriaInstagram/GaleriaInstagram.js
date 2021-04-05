import './assets/GaleriaInstagram.css'

export default function GaleriaInstagram( { lista } ) {

    let eKey = 0

    return (
        <div className="GaleriaInstagram">
            { lista.map(e => {
                eKey++
                return (
                    <div key={ eKey } className="GaleriaInstagram__foto" >{e}</div>
                )
            })}
        </div>
    )
}