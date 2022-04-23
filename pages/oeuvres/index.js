import styles from '../../styles/Oeuvres.module.css'
import Link from "next/link"

export const getStaticProps = async () => {
    
    const res = await fetch('https://beta.api.danae.io/test');
    const data = await res.json();

    return {
        props: { oeuvres: data}
    }
}
const oeuvres = ({ oeuvres }) => {
    return (
        <div>
            <h1>All oeuvres</h1>
            {oeuvres.map(oeuvre => ( 
                <Link href={'/oeuvres/' + oeuvre.id} key={oeuvre.id }>
                    <a className={styles.oeuvre}>
                        <h3>{ oeuvre.title }</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default oeuvres;