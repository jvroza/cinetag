import styles from './Banner.module.css';
import banner from '../../assets/image/banner-home.png';

function Banner() {
    return (
        <div className={styles.capa}
        style={{ backgroundImage: `url(${banner})` }}>
        </div>
    )
}

export default Banner;