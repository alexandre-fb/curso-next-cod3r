import styles from '../styles/Cartao.module.css'

interface CartaoProps {
    bgColor?: string
}

export default function Cartao(CartaoProps) {
    return (
        <div className={ styles.cartao }
             style={{ 
                backgroundColor: CartaoProps.bgColor ?? "#fff"
             }}> 
                { CartaoProps.children }
        </div>
    )
}