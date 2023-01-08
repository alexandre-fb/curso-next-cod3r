import { useEffect, useState } from "react"
import Porta from "../../../src/components/Porta"
import { atualizarPortas, criarPortas } from '../../../src/functions/portas'
import styles from '../../../src/styles/Jogo.module.css'
import Link from "next/link"
import { useRouter } from "next/router"

export default function Jogo() {

    const router = useRouter()

    const [portas, setPortas] = useState([])
    const [valido, setvalido] = useState(false)

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router.query]) 

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdePortasValida = portas>= 3 && portas <= 10
        const qtdetemPresenteValida = temPresente>= 1 && temPresente <= portas

        setvalido(qtdePortasValida && qtdetemPresenteValida)
    }, [portas, router.query.portas, router.query.temPresente]) 

    // +router.query.portas
    // +router.query.temPresente

    useState;

    return (
        <div className={ styles.jogo }>
            <div className={ styles.portas }>
                {
                    valido ?
                        portas.map(porta => {
                            return (
                                <Porta key={porta.numero} value={porta} 
                                    onChange={novaPorta =>  
                                        setPortas(atualizarPortas(portas, novaPorta))
                                    } 
                                />
                            )
                        }) : <h2>Valores inválidos</h2>
                    }
            </div>
            <div className={ styles.botoes }>
                <Link href="/">
                    <button>Voltar ao início</button>
                </Link>
            </div>
        </div>
    )
}