import { useRouter } from 'next/dist/client/router';
import Fade from 'react-reveal/Fade';
import { article, CardWrapper, articleWrapper, h1, button } from './../../styles/GeneralInfo.module.scss'


const Cards = () => {

    return (
        <Fade left cascade>
        <div className={CardWrapper}>
          
                <div>  <Card title="Services" text="We provide a full range of travel related services for clients traveling to Northern Europe and Baltic countries."/> </div>
                <div>  <Card title="Explore" text="Get to know about the destinations - where you can explore and what you can see with Kompas Nordic."/> </div>
                <div>  <Card title="Contact" text="It is easy to get in touch with us. Our dedicated team is ready to assist your request."/> </div>
                   
               
          
        </div>
        </Fade>  
        

        );

}


export const Card = (props) => {
    const router = useRouter()
    return (
        <div  className={articleWrapper}>
            <article className={article}>
                <h1 className={h1}>{ props.title}</h1>
                <section style={{ fontWeight: 500, color: "white" }}
                >{ props.text}
                    </section>
                <section onClick={()=>{
            router.push('/'+props.title)}} className={ button }>More info</section>

            </article>
            </div>
        )

}


export default Cards