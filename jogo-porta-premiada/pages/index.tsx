import Link from 'next/link'
import { useState } from 'react'
import Cartao from '../src/components/Cartao'
import EntradaNumerica from '../src/components/EntradaNumerica'
import styles from '../src/styles/Form.module.css'

export default function Form() {

  const [quantidadePortas, setQuantidadePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={ styles.form }>
      <div>      
        <Cartao bgColor="#c0392c">
          <h1>Monte Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica 
            text='Quantidade de Portas?' 
            value={quantidadePortas} 
            onChange={novaQuantidade => setQuantidadePortas(novaQuantidade)}     
        />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text='Porta com Presente?'
            value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} 
          />
        </Cartao>
        
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${quantidadePortas}/${comPresente}`}>
            <h2 className={ styles.link }>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>

)
}
