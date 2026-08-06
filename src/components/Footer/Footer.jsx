import './Footer.css'

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className='site-footer'>
            <p>
        &copy;{year} Harsha • Exploring Systems, One Project at a Time.
    </p>
        </footer>
    )
}
export default Footer; // We must export it so App.jsx can use it ! 