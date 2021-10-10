import styles from './../../styles/Shared_styles/layout.module.scss';


const Layout_:React.FC<any> = (props) => {

    return (
        <div onScroll={()=>{console.log("scrolla me se")}}  className={styles.layout_main}>
            {props.children}
            
        </div>
        
        );
}

export default Layout_;