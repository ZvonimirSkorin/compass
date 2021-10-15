import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from '../../styles/Shared_styles/EmailForm.module.scss';
import emailjs from 'emailjs-com';
import { AnyPointerEvent } from 'framer-motion/types/gestures/PanSession';


const EmailForm:React.FC<{Title?:string}> = (props) =>{
    const [h, setH] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{setH(1)},2000)
    },[])
    const Map = dynamic(
        () => import('../Explore/CountryMap'), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
    );

  
      const form = useRef<any>(null);
    
      const sendEmail = (e:any) => {
        e.preventDefault();
        
        emailjs.sendForm('service_kl76hb7', 'template_ih9p8nq', form.current, 'user_0rBTPAyjgh8e6beyxKstc')
          .then((result:any) => {
              console.log(result.text);
          }, (error:any) => {
              console.log(error.text);
          });
      };
    return(
        <div className={styles.FormParent} style={{zIndex:10}}>
<h2 className={styles.YouHaveA}>You have a question?</h2>

<div className={styles.container}>
    <form onSubmit={sendEmail} ref={form}>

    <label >Name</label>
    <input className={styles.input} type="text" id="fname" name="name" placeholder="Your name.."/>

    <label >Mail</label>
    <input autoComplete={"off"} className={styles.input} type="email" id="lname" name="reply_to" placeholder="Your last name.."/>

    
    <label >Title</label>
    <input autoComplete={"off"} className={styles.input} type="text" value={props.Title} id="subject" name="subject" placeholder={"Your last name.."}/>

    

    <label >Message</label>
    <textarea className={styles.textarea} id="subject" name="message" placeholder="Write something.." style={{height:"200px"}}></textarea>
        <span style={{margin:"0 auto"}}>
    <Button value="send" type="submit" variant="contained" >Send</Button>
            </span>
  </form>
</div>
<div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
<Map open={"Rotterdam"} zIndex={true} koordinate={[{city:"Rotterdam",lat:51.925786, lng:4.379585} , 
]} />
<article style={{marginTop:"1rem"}}>
    <h3>Kompas agency d.o.o</h3>
    <section style={{textAlign:"center"}}>Rotterdam street 123</section>
    <section style={{textAlign:"center"}}>lorem@kompas.com</section>
    <section style={{textAlign:"center"}}>+324 434 43 43</section>
</article>
</div>


        </div>
    );
}

export default EmailForm;