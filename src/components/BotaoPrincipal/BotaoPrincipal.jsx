import styles from './BotaoPrincipal.module.css'

export default function BotaoPrincipal({children, tamanho}){
    console.log(tamanho);
    return(
        
        <button className={
            `${styles.botaoPrincipal} 
            ${styles[tamanho]}`}
        >
            {children}
        </button>
    )
}

