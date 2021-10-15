import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/Toures/SecondSide.module.scss';



export const SecondSide:React.FC = () =>{
    const [selection, setSelection] = useState(0);
    let enable_document = useRef(false)
    useEffect(()=>{
        enable_document.current=true;
    })
    useEffect(()=>{
        if(enable_document.current){
            get_box(selection)
        }
    },[selection])

    return(

        <div className={styles.SecondSide}>
            <div className={styles.IMG}>
            <img style={{width:"100%",height:"100%",objectFit:"cover"}} src="https://i.picsum.photos/id/351/1000/700.jpg?hmac=GlTfmMthk5bxUMHWhNFh32vejRuxk5hPh3FS2Y4Pcwg"/>
            </div>
            <ul className={styles.UL}>
            <motion.i animate={(selection===0?{backgroundColor:"blue",color:"white"}:{})} onClick={()=>{setSelection(0)}} className={styles.i}>Program</motion.i>
            <motion.i animate={(selection===1?{backgroundColor:"blue",color:"white"}:{})} onClick={()=>{setSelection(1)}} className={styles.i}>Price includes</motion.i>
            <motion.i animate={(selection===2?{backgroundColor:"blue",color:"white"}:{})} onClick={()=>{setSelection(2)}} className={styles.i}>Details</motion.i>
            </ul>
            <article id="SecondSideArticle" className={styles.article}>
               
            
            </article>
        </div>
        
    );
    function get_box(val:number){
        if(!enable_document.current) return;

        switch (val) {
            case 0:
                   string_to_html(lorem_ipsum())
                   break;
                case 1:
                    string_to_html(lorem_ipsum2())
                    break;
        
            default:
                string_to_html(lorem_ipsum3())
                break;
        }
    
    }
    
    function lorem_ipsum(){
        return "<h3>1. day</h3> dui vitae sollicitudin sodales. Morbi luctus odio ac vulputate accumsan. Pellentesque tempor diam eget ex vehicula, in consectetur metus pretium. Donec feugiat felis nec tellus mattis, vel ullamcorper lacus faucibus. Pellentesque sed metus ex. Vivamus bibendum ut mauris in faucibus. Integer porttitor in nulla non hendrerit. Vestibulum dui orci, maximus sed pellentesque sed, convallis a elit. Praesent luctus lorem varius neque suscipit eleifend. Vestibulum imperdiet augue justo. Praesent tincidunt vehicula ligula, non congue justo blandit nec."
             + "<h3>2. day</h3> Proin non viverra nisi. Nam vulputate lobortis velit at efficitur. Aliquam at sapien augue. Vestibulum lectus felis, tincidunt nec egestas id, dignissim ac orci. Vestibulum vitae luctus risus. Donec venenatis quis ex id tincidunt. Ut id ex a nisl tristique sollicitudin nec non mauris. Nunc et varius est. Etiam placerat sit amet neque auctor accumsan."
             + "<h3>3. day</h3> Cras eget purus et justo iaculis ornare commodo ut lectus. Proin et turpis venenatis, tincidunt tortor vel, egestas tortor. Sed non facilisis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean non facilisis elit. Praesent tempus enim vel laoreet cursus. Etiam consectetur, lacus vel porttitor porta, massa urna hendrerit purus, placerat feugiat leo metus vel ante."
             + "<h3>4. day</h3> Proin non viverra nisi. Nam vulputate lobortis velit at efficitur. Aliquam at sapien augue. Vestibulum lectus felis, tincidunt nec egestas id, dignissim ac orci. Vestibulum vitae luctus risus. Donec venenatis quis ex id tincidunt. Ut id ex a nisl tristique sollicitudin nec non mauris. Nunc et varius est. Etiam placerat sit amet neque auctor accumsan."
             + "<h3>5. day</h3> Cras eget purus et justo iaculis ornare commodo ut lectus. Proin et turpis venenatis, tincidunt tortor vel, egestas tortor. Sed non facilisis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean non facilisis elit. Praesent tempus enim vel laoreet cursus. Etiam consectetur, lacus vel porttitor porta, massa urna hendrerit purus, placerat feugiat leo metus vel ante."
            
    }

    function lorem_ipsum2(){
        return  "<h3>Lorem ipsum</h3>"
        +"Fusce ac enim ut nisl eleifend pellentesque at a tellus. Sed lobortis, ex vel lobortis varius, metus leo malesuada sapien, ac sagittis ex augue id diam. Nunc eu scelerisque dui, vel sollicitudin est. Aliquam faucibus condimentum ipsum at malesuada. Quisque sapien nisl, cursus dignissim neque iaculis, aliquet scelerisque justo. Nullam varius non sapien at ultricies. Suspendisse sodales ex enim, auctor dapibus metus consequat vitae. Aenean maximus cursus rutrum. Integer eu nisl pulvinar, congue urna sit amet, ornare sapien. Integer viverra vel nisl ac pulvinar. Vivamus ac ultricies ligula, a ullamcorper arcu. Fusce dignissim velit eu vestibulum mattis. Ut ultrices tristique facilisis. Pellentesque consectetur justo orci, in vestibulum ipsum facilisis non. Maecenas quis mauris maximus, semper lectus nec, condimentum urna. Suspendisse eget magna in massa sagittis vestibulum hendrerit at sapien."
        +  "<h3>Lorem ipsum</h3>"
        +"Fusce ac enim ut nisl eleifend pellentesque at a tellus. Sed lobortis, ex vel lobortis varius, metus leo malesuada sapien, ac sagittis ex augue id diam. Nunc eu scelerisque dui, vel sollicitudin est. Aliquam faucibus condimentum ipsum at malesuada. Quisque sapien nisl, cursus dignissim neque iaculis, aliquet scelerisque justo. Nullam varius non sapien at ultricies. Suspendisse sodales ex enim, auctor dapibus metus consequat vitae. Aenean maximus cursus rutrum. Integer eu nisl pulvinar, congue urna sit amet, ornare sapien. Integer viverra vel nisl ac pulvinar. Vivamus ac ultricies ligula, a ullamcorper arcu. Fusce dignissim velit eu vestibulum mattis. Ut ultrices tristique facilisis. Pellentesque consectetur justo orci, in vestibulum ipsum facilisis non. Maecenas quis mauris maximus, semper lectus nec, condimentum urna. Suspendisse eget magna in massa sagittis vestibulum hendrerit at sapien."
    }
    function lorem_ipsum3(){
        return "Fusce ac enim ut nisl eleifend pellentesque at a tellus. Sed lobortis, ex vel lobortis varius, metus leo malesuada sapien, ac sagittis ex augue id diam. Nunc eu scelerisque dui, vel sollicitudin est. Aliquam faucibus condimentum ipsum at malesuada. Quisque sapien nisl, cursus dignissim neque iaculis, aliquet scelerisque justo. Nullam varius non sapien at ultricies. Suspendisse sodales ex enim, auctor dapibus metus consequat vitae. Aenean maximus cursus rutrum. Integer eu nisl pulvinar, congue urna sit amet, ornare sapien. Integer viverra vel nisl ac pulvinar. Vivamus ac ultricies ligula, a ullamcorper arcu. Fusce dignissim velit eu vestibulum mattis. Ut ultrices tristique facilisis. Pellentesque consectetur justo orci, in vestibulum ipsum facilisis non. Maecenas quis mauris maximus, semper lectus nec, condimentum urna. Suspendisse eget magna in massa sagittis vestibulum hendrerit at sapien."
        +"Fusce ac enim ut nisl eleifend pellentesque at a tellus. Sed lobortis, ex vel lobortis varius, metus leo malesuada sapien, ac sagittis ex augue id diam. Nunc eu scelerisque dui, vel sollicitudin est. Aliquam faucibus condimentum ipsum at malesuada. Quisque sapien nisl, cursus dignissim neque iaculis, aliquet scelerisque justo. Nullam varius non sapien at ultricies. Suspendisse sodales ex enim, auctor dapibus metus consequat vitae. Aenean maximus cursus rutrum. Integer eu nisl pulvinar, congue urna sit amet, ornare sapien. Integer viverra vel nisl ac pulvinar. Vivamus ac ultricies ligula, a ullamcorper arcu. Fusce dignissim velit eu vestibulum mattis. Ut ultrices tristique facilisis. Pellentesque consectetur justo orci, in vestibulum ipsum facilisis non. Maecenas quis mauris maximus, semper lectus nec, condimentum urna. Suspendisse eget magna in massa sagittis vestibulum hendrerit at sapien."
        +"Fusce ac enim ut nisl eleifend pellentesque at a tellus. Sed lobortis, ex vel lobortis varius, metus leo malesuada sapien, ac sagittis ex augue id diam. Nunc eu scelerisque dui, vel sollicitudin est. Aliquam faucibus condimentum ipsum at malesuada. Quisque sapien nisl, cursus dignissim neque iaculis, aliquet scelerisque justo. Nullam varius non sapien at ultricies. Suspendisse sodales ex enim, auctor dapibus metus consequat vitae. Aenean maximus cursus rutrum. Integer eu nisl pulvinar, congue urna sit amet, ornare sapien. Integer viverra vel nisl ac pulvinar. Vivamus ac ultricies ligula, a ullamcorper arcu. Fusce dignissim velit eu vestibulum mattis. Ut ultrices tristique facilisis. Pellentesque consectetur justo orci, in vestibulum ipsum facilisis non. Maecenas quis mauris maximus, semper lectus nec, condimentum urna. Suspendisse eget magna in massa sagittis vestibulum hendrerit at sapien."
        +"Fusce ac enim ut nisl eleifend pellentesque at a tellus. Sed lobortis, ex vel lobortis varius, metus leo malesuada sapien, ac sagittis ex augue id diam. Nunc eu scelerisque dui, vel sollicitudin est. Aliquam faucibus condimentum ipsum at malesuada. Quisque sapien nisl, cursus dignissim neque iaculis, aliquet scelerisque justo. Nullam varius non sapien at ultricies. Suspendisse sodales ex enim, auctor dapibus metus consequat vitae. Aenean maximus cursus rutrum. Integer eu nisl pulvinar, congue urna sit amet, ornare sapien. Integer viverra vel nisl ac pulvinar. Vivamus ac ultricies ligula, a ullamcorper arcu. Fusce dignissim velit eu vestibulum mattis. Ut ultrices tristique facilisis. Pellentesque consectetur justo orci, in vestibulum ipsum facilisis non. Maecenas quis mauris maximus, semper lectus nec, condimentum urna. Suspendisse eget magna in massa sagittis vestibulum hendrerit at sapien."

    }

    function string_to_html(vals:string){
        let el = document.getElementById("SecondSideArticle")
                   if(el!=null) el.innerHTML=vals;
    }
}



