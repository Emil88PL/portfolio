import url from '../img/keyB.png'
import './Header.css'

const Header = () => {

    return <>
        <section className='mainHeader'>
            <div className="container">
                <div className="d-lg-flex">
                    
                        <img src={url} alt="Screenshot-of-site" className="img-fluid w-50  mx-auto d-block" />
                    
                    <div className="col-lg col-md  d-flex flex-column">
                        <h3 className="title">Hi! my name is Emil Kotlowski</h3>
                        <p>I'm building sites in HTML, CSS and vanilla JavaScript. Some of the site also have Bootstrap, JQuery, PHP for MySQL database and API. At the moment I'm trying to focus on REACT.js</p>
                        <p className="pb-3">I have finished CIW courses, my CV constantly changes as I learn everyday something new</p>
                        <div className="align-self-center mt-auto align-self-lg-start translate-middle-y">
                            <a href='https://github.com/Emil88PL/Emil88pl.github.io' className='button ' target="_blank" rel="noreferrer">View Code</a>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Header