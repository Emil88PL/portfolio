import { data } from './data'
import './list.css'
import 'bootstrap/dist/css/bootstrap.css'

const List = () => {

    return (
        <section>
        {data.map((data) => {
             return <Tail key={data.id} {...data}></Tail>})}
            </section>
            )
}

const Tail = (props) => {

    const { heading, paraG, buttonS, buttonC } = props
    const url = props.image.url
    // console.log(props.image.url);

    return <>
    <div id="portfolio" className="container">
        <div className="row d-flex " >
            <div className="col-md">
                <a href={buttonS} target="_blank" rel="noreferrer"><img src={url} alt="" className="img-fluid w-20"/></a>
            </div>
            <div className="col-md  d-flex flex-column">
                <h1>{heading}</h1>
                <p className="pb-3">{paraG}</p>
                <div className="align-self-center mt-auto align-self-lg-start translate-middle-y ">
                    <a href={buttonS} className='button ' target="_blank" rel="noreferrer">Show</a>
                    <a href={buttonC} className='button ' target="_blank" rel="noreferrer">View Code</a>
                </div>

                {/* <div className="col-md position-absolute bottom-0 start-0 translate-middle-y">
                    <a href={buttonS} className='button' target="_blank" rel="noreferrer">Show</a>
                    <a href={buttonC} className='button' target="_blank" rel="noreferrer">View Code</a>
                </div> */}
            </div>
        </div>
    </div>
</>
    
}

export default List