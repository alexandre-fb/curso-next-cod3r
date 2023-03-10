import styles from '../styles/Porta.module.css'
import PortaModel from '../model/porta'
import Presente from '../components/Presente'

interface PortaProps {
    value: PortaModel,
    onChange: (novaPorta: PortaModel) => void,
}

const Porta = (props: PortaProps) => {
    const porta = props.value

    const alternarSelecao = () => props.onChange(porta.alternarSelecao())
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''
    const abrir = (event: any) => {
        event.stopPropagation()
        props.onChange(porta.abrir())
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                { 

                porta.fechada ? 
                (
                    <div className={styles.porta}>
                        <div className={styles.numero}>{porta.numero}</div>        
                        <div className={styles.macaneta} onClick={abrir}></div>        
                    </div>
                ) : porta.temPresente ?
                (
                    <Presente />
                ) : false
                
                }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}

export default Porta