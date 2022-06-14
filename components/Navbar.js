import styles from '../styles/Navbar.module.css';


const Navbar = () => {
    return (
        <div>
         <div >
            <div className={styles.nav_container}>
             <div className={styles.topnav}>
                 <a href="/">Home</a>
                 <a href="/datapages">News</a>
                 <a href="/contact">Contact</a>
                 <a href="/about">About</a>
                 <a href='/faq'> FAQ </a>
                 <a href= '/datapages/id' >Features</a>
               </div>
             </div>
           </div>
        </div>
    );
}

export default Navbar;
