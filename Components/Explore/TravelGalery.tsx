import styles from './../../styles/ExploreStyles/Galery.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';
import YourStoryText from './SmallComponents/YourStoryText';


const TravelGalery: React.FC = () => {

    const [hover, setHover] = useState(0)

    return (
        <div className={styles.TravelGalery}> 
            <h1 style={{textAlign:"center",margin:"3rem 0"}}>One agency, hundreds of trips, thousands of memories</h1>
            <section className={styles.GaleryFirstSection}>
                <section className={styles.BigImage} onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(1) }} style={{overflow:"hidden",position:"relative"}}>
                    <motion.img
                         animate={hover==1 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}
                        className={styles.Img} src={"https://i.picsum.photos/id/866/1000/1000.jpg?hmac=6eKrL6QHaG5cwQWxX70J0v_KiidLGDTcUMW78JZT1yQ"} />
                    <YourStoryText title="Asian adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} fireUp={hover===1}/>
                </section>
                <section onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(2) }} className={styles.WideImage} style={{ overflow: "hidden", position:"relative" }}>
                    <motion.img
                       animate={hover == 2 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}
                        className={styles.Img} src={"https://i.picsum.photos/id/441/1000/1000.jpg?hmac=WN8AN6QCgVWww-5YlqFHgOfmeveUW8D2sfuql71hIdk"} />
                    <YourStoryText title="Croatian adventure"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna."
                        style={styles.NameHolder} fireUp={hover === 2} />

                </section>
                <section className={styles.BottomPics}>
                    <div onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(3) }} style={{ position: "relative", overflow: "hidden" }}>
                        <motion.img
                             animate={hover == 3 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                        
                            style={{ position: "absolute", top: 0, left: 0,bottom:0,right:0 }}
                            className={styles.Img} src={"https://i.picsum.photos/id/1074/1000/1000.jpg?hmac=MT7o-7j4RFvtHMIlOYeEnlnQ1iAzSxTcW_3be7hqQxY"} />
                        <YourStoryText fireUp={hover === 3}  title="German adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder}  />

                    </div>
                    <div onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(4) }} style={{ position: "relative", overflow: "hidden" }}>
                        <motion.img
                             animate={hover == 4 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                            style={{ position: "absolute", top: 0, left: 0,bottom:0,right:0 }}
                            className={styles.Img}
                            src={"https://i.picsum.photos/id/1065/1000/1000.jpg?hmac=BZfHofPOZq6CGoktN3Sw7dIpciBsb-FlD7HFMDv_m1M"} />
                        <YourStoryText fireUp={hover === 4} title="Scandinavian adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                    </div>
                    
                </section>

            </section>
            <section className={styles.GalerySecondSection} style={{position:"relative"}}>
                <section onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(5) }} className={styles.WideImageSecondBox}
                    style={{ overflow: "hidden", position: "relative" }}>
                    <motion.img
                         animate={hover == 5 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                     className={styles.Img} src={"https://i.picsum.photos/id/829/1000/1000.jpg?hmac=Foj_bJPadItjLszfax6Y0bmukYx6VxzW3wuvuJn_Exs"} />
                    <YourStoryText fireUp={hover === 5} title="American adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                </section>
               
                <section className={styles.BottomPicsSecondBox} style={{position:"relative"}}>
                    <div onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(6) }} className={styles.SecondBoxSmallImageOne} style={{ position: "relative", overflow: "hidden" }} >
                    <motion.img
                         animate={hover == 6 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                            style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                            className={styles.Img}  src={"https://i.picsum.photos/id/575/1000/1000.jpg?hmac=4xmYTQ5RIZjhNS4i1C26hXfhJw-3MGbKcH53G8-APT8"} />
                        <YourStoryText fireUp={hover === 6} title="Australian adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                    </div>
                    <div onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(7) }} className={styles.SecondBoxSmallImageTwo} style={{ position: "relative", overflow:"hidden"}}>
                    <motion.img
                         animate={hover == 7 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                            style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                            className={styles.Img} src={"https://i.picsum.photos/id/849/1000/1000.jpg?hmac=iv-vI5TzN-HZD9IzvMGt5rrX-o9Pb-l5BSyAUfKzUJU"} />
                        <YourStoryText fireUp={hover === 7} title="African adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                    </div>
                </section>

            </section>
             <section className={styles.GaleryThirdSection}>
                <section className={styles.BottomPicsThirdBox}>
                    <div onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(8) }} className={styles.ThirdBoxSmallImageOne} style={{ position: "relative",overflow:"hidden"}}>
                    <motion.img
                         animate={hover == 8 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                            style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                            className={styles.Img} src={"https://i.picsum.photos/id/1016/1000/1000.jpg?hmac=pvzsL3Q1aEGhQ9kPhXNkqb8dNNg4QGbvFdGt_re_3N0"} />
                        <YourStoryText fireUp={hover === 8} title="Russian adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                    </div>
                    <div onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(9) }}  className={styles.ThirdBoxSmallImageTwo} style={{ position: "relative", overflow:"hidden"}}>
                    <motion.img
                        animate={hover == 9 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                            style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                            className={styles.Img} src={"https://i.picsum.photos/id/1057/1000/1000.jpg?hmac=Z835Cv9KA132ewlm-nHcGB-JMpqzwjNiCL0LZ2V-Ru8"} />
                        <YourStoryText fireUp={hover === 9} title="Japan adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                    </div>
                </section>

            </section>
            <section style={{ marginTop:"0.5rem",position:"relative" }} className={styles.GaleryFirstSection}>
                <section
                    onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(10) }}
                    className={styles.BigImageFourth} style={{ overflow: "hidden",position:"relative" }}>
                    <motion.img
                         animate={hover == 10 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}
                      className={styles.Img} src={"https://i.picsum.photos/id/418/1000/1000.jpg?hmac=pUtXW4C_TjTsxzcKV6YM_hxl4aBkM4iNxo0asN8lKN4"} />
                    <YourStoryText fireUp={hover === 10} title="Indian adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                </section>
                <section
                    onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(11) }} 
                    className={styles.WideImageFourth} style={{ overflow: "hidden", position: "relative" }}>
                    <motion.img
                        animate={hover == 11 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}


                     className={styles.Img} src={"https://i.picsum.photos/id/323/1000/1000.jpg?hmac=QPPeRs-i_8HF4QRrJJVUyUOYgmnB3xE6UbrBE3AHNI4"} />
                    <YourStoryText fireUp={hover === 11} title="Polish adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                </section>
                <section className={styles.TopPicsFourth}>
                    <div style={{ position: "relative", overflow: "hidden" }}
                        onMouseLeave={() => { setHover(0) }} onMouseEnter={(e) => { setHover(12) }} >
                        <motion.img
                           animate={hover == 12 ? { transform: "scale(1.2)" } : { transform: "scale(1)" }}

                            style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                            className={styles.Img} src={"https://i.picsum.photos/id/645/1000/1000.jpg?hmac=tsefAfY9Y6lUmmanvaxEJTt1-_iRcJK7lanOnUpfbQQ"} />
                        <YourStoryText fireUp={hover === 12} title="Peruan adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                    </div>
                    <motion.div
                        onMouseLeave={() => { setHover(13) }} onMouseEnter={(e) => { setHover(13) }}
                         style={{ position: "relative", overflow: "hidden" }}>
                        <motion.img
                                animate={hover==13 ? { transform: "scale(1.2)" } : {transform:"scale(1)"}}
                            style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
                            className={styles.Img} src={"https://i.picsum.photos/id/884/1000/1000.jpg?hmac=H29JMVVZnwlNmSi41pTs4uxfY9oWeFsok37IQKbcQDo"} />
                        <YourStoryText fireUp={hover === 13} title="Puertorican adventure" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ipsum at nisl iaculis mollis id ac magna." style={styles.NameHolder} />

                    </motion.div>
                </section>

            </section>

            </div>
        
        );
}


export default TravelGalery;