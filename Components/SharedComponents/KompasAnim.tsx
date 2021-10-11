import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from './../../styles/Shared_styles/logo.module.scss';

const KompasAnim:React.FC<{stop:undefined | boolean}> = (props) => {
    useEffect(() => {
        return;
        let paths: any = document.getElementById('logo');
        if (paths?.children !== undefined) 
            for (var i = 0; i < paths?.children.length; i++) {
                console.log(i+' je '+paths.childNodes[i].getBoundingClientRect().width)
        }
    }, [])
    return (
        <motion.svg
        animate={{scale:[0,1]}}
        transition={{duration:2.5}}
         id="logo" width="167"  viewBox="0 0 167 163" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.6766 82.2L59.2218 98.5663L6.58431 82.2H75.6766Z" fill="#C9DA2A" stroke="#C9DA2A" stroke-width="2" />
            <path d="M75.6766 80.2H6.58431L59.2218 63.8337L75.6766 80.2Z" fill="#5EA73C" stroke="#5EA73C" stroke-width="2" />
            <path d="M107.48 63.834L160.205 80.2H91.1142L107.48 63.834Z" fill="#C9DA2A" stroke="#C9DA2A" stroke-width="2" />
            <path d="M160.205 82.2L107.48 98.566L91.1142 82.2H160.205Z" fill="#5EA73C" stroke="#5EA73C" stroke-width="2" />
            <path d="M66.0335 59.3216L82.4 6.59488V75.7766L66.0335 59.3216Z" fill="#00ADEE" stroke="#00ADEE" stroke-width="2" />
            <path d="M84.4 6.59488L100.767 59.3216L84.4 75.7766V6.59488Z" fill="#0065A3" stroke="#0065A3" stroke-width="2" />
            <path d="M84.4 86.7143L100.766 103.08L84.4 155.805V86.7143Z" fill="#00ADEE" stroke="#00ADEE" stroke-width="2" />
            <path d="M66.134 102.78L82.5 86.4142V155.505L66.134 102.78Z" fill="#0065A3" stroke="#0065A3" stroke-width="2" />
            <path d="M105.096 44.6002L133.853 29.4479L108.273 55.109L105.096 44.6002Z" fill="#5EA73C" stroke="#5EA73C" stroke-width="2" />
            <path d="M135.272 30.8567L120.197 59.7033L109.685 56.5253L135.272 30.8567Z" fill="#C9DA2A" stroke="#C9DA2A" stroke-width="2" />
            <path d="M121.003 103.001L136.168 131.784L110.484 106.263L121.003 103.001Z" fill="#0065A3" stroke="#0065A3" stroke-width="2" />
            <path d="M134.712 133.156L105.898 118.098L109.073 107.68L134.712 133.156Z" fill="#00ADEE" stroke="#00ADEE" stroke-width="2" />
            <path d="M61.7988 118.803L33.0163 133.968L58.5373 108.284L61.7988 118.803Z" fill="#5EA73C" stroke="#5EA73C" stroke-width="2" />
            <path d="M46.7021 103.698L57.1205 106.873L31.6441 132.512L46.7021 103.698Z" fill="#C9DA2A" stroke="#C9DA2A" stroke-width="2" />
            <path d="M46.6993 59.6025L31.5643 30.8786L57.1148 56.429L46.6993 59.6025Z" fill="#0065A3" stroke="#0065A3" stroke-width="2" />
            <path d="M61.7979 44.5001L58.5355 55.0213L32.9258 29.4116L61.7979 44.5001Z" fill="#00ADEE" stroke="#00ADEE" stroke-width="2" />
        </motion.svg>

        );
}

export const KompasAnimatedName: React.FC<{stop:undefined | boolean}> = (props) => {
    return (
        <svg id="KompasName"
        style={props.stop?{display:"none"}:{}}
        className={styles.KompasName} width="781" height="243" viewBox="0 0 781 243" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask className={ styles.mask} id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.625" y="0.599976" width="780" height="242" fill="black">
                    <rect fill="white" x="0.625" y="0.599976" width="780" height="242" />
                    <path d="M43.225 20.4C44.2917 22.5333 44.8917 24.5333 45.025 26.4C45.2917 28.2666 45.425 31.6666 45.425 36.6C45.425 41.5333 43.7583 55.4 40.425 78.2L38.625 89.8C56.625 75 71.825 60.6666 84.225 46.8C96.625 32.8 105.358 20.9333 110.425 11.2C114.825 18.9333 117.025 26.5333 117.025 34C117.025 41.3333 113.225 48.8666 105.625 56.6C98.1583 64.3333 86.825 73.8 71.625 85C80.9583 114.467 91.425 137.267 103.025 153.4C107.958 160.2 114.225 167.6 121.825 175.6C116.892 176.933 111.958 177.6 107.025 177.6C102.092 177.6 97.025 176.067 91.825 173C86.625 169.933 82.0917 166.2 78.225 161.8C74.4917 157.4 70.625 151.533 66.625 144.2C60.8917 133.4 54.6917 119.2 48.025 101.6C44.2917 104.4 40.225 107.267 35.825 110.2C33.425 130.067 32.225 145.133 32.225 155.4C32.225 165.533 33.1583 172.8 35.025 177.2C23.6917 174.267 15.9583 170.4 11.825 165.6C7.69167 160.667 5.625 153.867 5.625 145.2C5.625 140.133 7.025 127.267 9.825 106.6C14.7583 72.3333 17.225 45.8 17.225 27C17.225 23 16.9583 17.5333 16.425 10.6C26.5583 11.1333 33.9583 12.7333 38.625 15.4C40.625 16.4666 42.1583 18.1333 43.225 20.4Z" />
                    <path d="M197.005 70.8C188.338 70.8 180.605 76.6666 173.805 88.4C167.005 100 163.605 111.6 163.605 123.2C163.605 147.467 169.871 159.6 182.405 159.6C191.338 159.6 198.605 153.8 204.205 142.2C209.805 130.467 212.605 117.333 212.605 102.8C212.605 81.4667 207.405 70.8 197.005 70.8ZM209.405 56.2C217.405 56.2 224.205 60.1333 229.805 68C235.405 75.8666 238.205 86.4 238.205 99.6C238.205 114.4 235.205 128 229.205 140.4C222.538 154.4 213.071 164.067 200.805 169.4C193.871 172.467 186.271 174 178.005 174C166.405 174 156.271 169.533 147.605 160.6C139.071 151.533 134.805 138.6 134.805 121.8C134.805 104.867 138.938 90 147.205 77.2C155.471 64.2666 166.405 56.1333 180.005 52.8C181.471 52.8 182.805 53.2666 184.005 54.2C185.338 55 186.005 55.8667 186.005 56.8C172.538 66.1333 164.471 79.1333 161.805 95.8C164.605 88.3333 168.005 81.8666 172.005 76.4C176.138 70.9333 180.405 66.8 184.805 64C193.205 58.8 201.405 56.2 209.405 56.2Z" />
                    <path d="M348.642 149.8C348.642 156.467 349.042 163.533 349.842 171C345.576 171.267 342.776 171.4 341.442 171.4C333.976 171.4 328.576 170.133 325.242 167.6C321.909 164.933 320.242 161.067 320.242 156C320.242 150.933 321.642 140.533 324.442 124.8C327.376 108.933 328.842 96.9333 328.842 88.8C328.842 80.5333 326.176 76.4 320.842 76.4C317.909 76.4 314.709 78.2 311.242 81.8C307.776 85.2666 304.509 90.0666 301.442 96.2C298.376 102.2 295.776 109.933 293.642 119.4C291.642 128.867 290.642 138 290.642 146.8C290.642 155.467 291.042 163.533 291.842 171C287.576 171.267 284.776 171.4 283.442 171.4C275.976 171.4 270.576 170.133 267.242 167.6C263.909 164.933 262.242 160.533 262.242 154.4C262.242 152.933 263.576 143 266.242 124.6C269.042 106.2 270.442 91.6667 270.442 81C270.442 70.2 269.309 60.3333 267.042 51.4C276.909 54.4666 283.776 58.8666 287.642 64.6C291.509 70.3333 293.442 77.4 293.442 85.8C293.442 90.0666 292.976 95.4667 292.042 102C296.576 88.6667 302.842 77.6 310.842 68.8C318.976 60 326.776 55.6 334.242 55.6C341.842 55.6 347.309 58.4 350.642 64C354.109 69.6 355.842 77.6666 355.842 88.2C360.909 78.4667 366.709 70.6 373.242 64.6C379.776 58.6 385.776 55.6 391.242 55.6C399.376 55.6 405.109 58.0666 408.442 63C411.909 67.8 413.642 74.4 413.642 82.8C413.642 91.0666 412.309 102.733 409.642 117.8C407.109 132.867 405.842 143.867 405.842 150.8C405.842 157.6 406.709 162.6 408.442 165.8C410.176 168.867 413.109 171.533 417.242 173.8C415.509 173.933 413.042 174 409.842 174C398.642 174 390.642 172.267 385.842 168.8C381.176 165.333 378.842 159.267 378.842 150.6C378.842 145.667 380.176 136.067 382.842 121.8C385.509 107.4 386.842 96.6667 386.842 89.6C386.842 80.8 384.176 76.4 378.842 76.4C374.842 76.4 370.509 79.3333 365.842 85.2C361.309 90.9333 357.309 99.6666 353.842 111.4C350.376 123 348.642 135.8 348.642 149.8Z" />
                    <path d="M493.148 70C501.682 63.6 510.082 60.4 518.348 60.4C526.615 60.4 533.415 63.7333 538.748 70.4C544.215 76.9333 546.948 86.4667 546.948 99C546.948 119 541.482 136 530.548 150C519.615 164 506.482 171 491.148 171C485.682 171 480.148 169.933 474.548 167.8C487.615 164.733 498.015 156.267 505.748 142.4C513.482 128.533 517.348 114.733 517.348 101C517.348 94.6 516.148 89.4 513.748 85.4C511.482 81.4 508.215 79.4 503.948 79.4C495.815 79.4 488.615 84.3333 482.348 94.2C476.082 104.067 471.282 117.6 467.948 134.8C464.615 151.867 462.948 169.667 462.948 188.2C462.948 206.867 464.282 223.067 466.948 236.8C456.015 236.4 447.882 234.6 442.548 231.4C437.348 228.333 434.748 222.4 434.748 213.6C434.748 210.4 436.748 193.533 440.748 163C444.882 132.333 446.948 108.733 446.948 92.2C446.948 75.6667 445.948 61.7333 443.948 50.4C454.615 53.0667 461.948 58 465.948 65.2C470.082 72.4 472.148 82.9333 472.148 96.8C477.748 85.3333 484.748 76.4 493.148 70Z" />
                    <path d="M594.231 133.2C594.231 139.467 595.365 144.6 597.631 148.6C600.031 152.467 603.365 154.4 607.631 154.4C613.898 154.4 619.831 150.733 625.431 143.4C631.165 136.067 635.698 126.667 639.031 115.2C642.498 103.733 644.231 92.8666 644.231 82.6C644.231 72.2 643.831 63.8 643.031 57.4C647.031 57.1333 649.831 57 651.431 57C658.231 57 663.365 58.2666 666.831 60.8C670.298 63.3333 672.031 67.8667 672.031 74.4C672.031 76.9333 670.431 87.2666 667.231 105.4C664.031 123.4 662.431 137.867 662.431 148.8C662.431 159.6 664.498 169.2 668.631 177.6C658.631 175.867 651.298 172.2 646.631 166.6C641.965 160.867 639.631 152.667 639.631 142C639.631 140.133 639.898 136.533 640.431 131.2C636.831 143.867 630.431 154.067 621.231 161.8C612.031 169.533 602.965 173.4 594.031 173.4C585.231 173.4 578.098 170.133 572.631 163.6C567.298 156.933 564.631 147.533 564.631 135.4C564.631 123.267 566.765 111.533 571.031 100.2C575.431 88.7333 581.965 79.0666 590.631 71.2C599.298 63.2 608.965 59.2 619.631 59.2C625.765 59.2 632.031 60.6666 638.431 63.6C624.965 68.4 614.231 77.8666 606.231 92C598.231 106 594.231 119.733 594.231 133.2Z" />
                    <path d="M740.784 67.4C737.051 67.4 733.718 68.6666 730.784 71.2C727.851 73.6 726.384 77.0666 726.384 81.6C726.384 86.1333 727.918 90.4 730.984 94.4C734.184 98.4 738.051 101.933 742.584 105C747.118 107.933 751.651 111 756.184 114.2C760.851 117.267 764.918 121.133 768.384 125.8C771.851 130.333 773.784 135.4 774.184 141C774.184 150.6 770.051 158.667 761.784 165.2C753.518 171.733 743.251 175 730.984 175C718.718 175 709.051 172.533 701.984 167.6C695.051 162.667 691.584 157 691.584 150.6C691.584 144.2 693.518 139.067 697.384 135.2C701.384 131.2 706.318 129.2 712.184 129.2C715.251 129.2 718.118 129.733 720.784 130.8C716.518 135.333 714.384 140.133 714.384 145.2C714.384 150.267 715.784 154.333 718.584 157.4C721.384 160.467 725.184 162 729.984 162C734.784 162 738.784 160.8 741.984 158.4C745.318 155.867 746.984 152.667 746.984 148.8C746.984 144.8 745.851 141.267 743.584 138.2C741.318 135.133 738.451 132.467 734.984 130.2C731.651 127.8 727.984 125.133 723.984 122.2C719.984 119.267 716.251 116.333 712.784 113.4C709.451 110.333 706.651 106.533 704.384 102C702.118 97.3333 700.984 92.2666 700.984 86.8C700.984 77.3333 704.851 69.6 712.584 63.6C720.451 57.4666 730.184 54.4 741.784 54.4C753.518 54.4 762.051 56.6667 767.384 61.2C772.851 65.7333 775.584 71.0666 775.584 77.2C775.584 83.2 773.651 88.3333 769.784 92.6C766.051 96.8666 761.184 99 755.184 99C752.251 99 748.918 98.4 745.184 97.2C748.118 94.6666 750.384 91.8 751.984 88.6C753.584 85.2666 754.384 82 754.384 78.8C754.384 75.6 753.051 72.9333 750.384 70.8C747.718 68.5333 744.518 67.4 740.784 67.4Z" />
                </mask>
                <path d="M43.225 20.4C44.2917 22.5333 44.8917 24.5333 45.025 26.4C45.2917 28.2666 45.425 31.6666 45.425 36.6C45.425 41.5333 43.7583 55.4 40.425 78.2L38.625 89.8C56.625 75 71.825 60.6666 84.225 46.8C96.625 32.8 105.358 20.9333 110.425 11.2C114.825 18.9333 117.025 26.5333 117.025 34C117.025 41.3333 113.225 48.8666 105.625 56.6C98.1583 64.3333 86.825 73.8 71.625 85C80.9583 114.467 91.425 137.267 103.025 153.4C107.958 160.2 114.225 167.6 121.825 175.6C116.892 176.933 111.958 177.6 107.025 177.6C102.092 177.6 97.025 176.067 91.825 173C86.625 169.933 82.0917 166.2 78.225 161.8C74.4917 157.4 70.625 151.533 66.625 144.2C60.8917 133.4 54.6917 119.2 48.025 101.6C44.2917 104.4 40.225 107.267 35.825 110.2C33.425 130.067 32.225 145.133 32.225 155.4C32.225 165.533 33.1583 172.8 35.025 177.2C23.6917 174.267 15.9583 170.4 11.825 165.6C7.69167 160.667 5.625 153.867 5.625 145.2C5.625 140.133 7.025 127.267 9.825 106.6C14.7583 72.3333 17.225 45.8 17.225 27C17.225 23 16.9583 17.5333 16.425 10.6C26.5583 11.1333 33.9583 12.7333 38.625 15.4C40.625 16.4666 42.1583 18.1333 43.225 20.4Z" stroke="#0065A3" stroke-width="5" mask="url(#path-1-outside-1)" />
                <path d="M197.005 70.8C188.338 70.8 180.605 76.6666 173.805 88.4C167.005 100 163.605 111.6 163.605 123.2C163.605 147.467 169.871 159.6 182.405 159.6C191.338 159.6 198.605 153.8 204.205 142.2C209.805 130.467 212.605 117.333 212.605 102.8C212.605 81.4667 207.405 70.8 197.005 70.8ZM209.405 56.2C217.405 56.2 224.205 60.1333 229.805 68C235.405 75.8666 238.205 86.4 238.205 99.6C238.205 114.4 235.205 128 229.205 140.4C222.538 154.4 213.071 164.067 200.805 169.4C193.871 172.467 186.271 174 178.005 174C166.405 174 156.271 169.533 147.605 160.6C139.071 151.533 134.805 138.6 134.805 121.8C134.805 104.867 138.938 90 147.205 77.2C155.471 64.2666 166.405 56.1333 180.005 52.8C181.471 52.8 182.805 53.2666 184.005 54.2C185.338 55 186.005 55.8667 186.005 56.8C172.538 66.1333 164.471 79.1333 161.805 95.8C164.605 88.3333 168.005 81.8666 172.005 76.4C176.138 70.9333 180.405 66.8 184.805 64C193.205 58.8 201.405 56.2 209.405 56.2Z" stroke="#0065A3" stroke-width="5" mask="url(#path-1-outside-1)" />
                <path d="M348.642 149.8C348.642 156.467 349.042 163.533 349.842 171C345.576 171.267 342.776 171.4 341.442 171.4C333.976 171.4 328.576 170.133 325.242 167.6C321.909 164.933 320.242 161.067 320.242 156C320.242 150.933 321.642 140.533 324.442 124.8C327.376 108.933 328.842 96.9333 328.842 88.8C328.842 80.5333 326.176 76.4 320.842 76.4C317.909 76.4 314.709 78.2 311.242 81.8C307.776 85.2666 304.509 90.0666 301.442 96.2C298.376 102.2 295.776 109.933 293.642 119.4C291.642 128.867 290.642 138 290.642 146.8C290.642 155.467 291.042 163.533 291.842 171C287.576 171.267 284.776 171.4 283.442 171.4C275.976 171.4 270.576 170.133 267.242 167.6C263.909 164.933 262.242 160.533 262.242 154.4C262.242 152.933 263.576 143 266.242 124.6C269.042 106.2 270.442 91.6667 270.442 81C270.442 70.2 269.309 60.3333 267.042 51.4C276.909 54.4666 283.776 58.8666 287.642 64.6C291.509 70.3333 293.442 77.4 293.442 85.8C293.442 90.0666 292.976 95.4667 292.042 102C296.576 88.6667 302.842 77.6 310.842 68.8C318.976 60 326.776 55.6 334.242 55.6C341.842 55.6 347.309 58.4 350.642 64C354.109 69.6 355.842 77.6666 355.842 88.2C360.909 78.4667 366.709 70.6 373.242 64.6C379.776 58.6 385.776 55.6 391.242 55.6C399.376 55.6 405.109 58.0666 408.442 63C411.909 67.8 413.642 74.4 413.642 82.8C413.642 91.0666 412.309 102.733 409.642 117.8C407.109 132.867 405.842 143.867 405.842 150.8C405.842 157.6 406.709 162.6 408.442 165.8C410.176 168.867 413.109 171.533 417.242 173.8C415.509 173.933 413.042 174 409.842 174C398.642 174 390.642 172.267 385.842 168.8C381.176 165.333 378.842 159.267 378.842 150.6C378.842 145.667 380.176 136.067 382.842 121.8C385.509 107.4 386.842 96.6667 386.842 89.6C386.842 80.8 384.176 76.4 378.842 76.4C374.842 76.4 370.509 79.3333 365.842 85.2C361.309 90.9333 357.309 99.6666 353.842 111.4C350.376 123 348.642 135.8 348.642 149.8Z" stroke="#0065A3" stroke-width="5" mask="url(#path-1-outside-1)" />
                <path d="M493.148 70C501.682 63.6 510.082 60.4 518.348 60.4C526.615 60.4 533.415 63.7333 538.748 70.4C544.215 76.9333 546.948 86.4667 546.948 99C546.948 119 541.482 136 530.548 150C519.615 164 506.482 171 491.148 171C485.682 171 480.148 169.933 474.548 167.8C487.615 164.733 498.015 156.267 505.748 142.4C513.482 128.533 517.348 114.733 517.348 101C517.348 94.6 516.148 89.4 513.748 85.4C511.482 81.4 508.215 79.4 503.948 79.4C495.815 79.4 488.615 84.3333 482.348 94.2C476.082 104.067 471.282 117.6 467.948 134.8C464.615 151.867 462.948 169.667 462.948 188.2C462.948 206.867 464.282 223.067 466.948 236.8C456.015 236.4 447.882 234.6 442.548 231.4C437.348 228.333 434.748 222.4 434.748 213.6C434.748 210.4 436.748 193.533 440.748 163C444.882 132.333 446.948 108.733 446.948 92.2C446.948 75.6667 445.948 61.7333 443.948 50.4C454.615 53.0667 461.948 58 465.948 65.2C470.082 72.4 472.148 82.9333 472.148 96.8C477.748 85.3333 484.748 76.4 493.148 70Z" stroke="#0065A3" stroke-width="5" mask="url(#path-1-outside-1)" />
                <path d="M594.231 133.2C594.231 139.467 595.365 144.6 597.631 148.6C600.031 152.467 603.365 154.4 607.631 154.4C613.898 154.4 619.831 150.733 625.431 143.4C631.165 136.067 635.698 126.667 639.031 115.2C642.498 103.733 644.231 92.8666 644.231 82.6C644.231 72.2 643.831 63.8 643.031 57.4C647.031 57.1333 649.831 57 651.431 57C658.231 57 663.365 58.2666 666.831 60.8C670.298 63.3333 672.031 67.8667 672.031 74.4C672.031 76.9333 670.431 87.2666 667.231 105.4C664.031 123.4 662.431 137.867 662.431 148.8C662.431 159.6 664.498 169.2 668.631 177.6C658.631 175.867 651.298 172.2 646.631 166.6C641.965 160.867 639.631 152.667 639.631 142C639.631 140.133 639.898 136.533 640.431 131.2C636.831 143.867 630.431 154.067 621.231 161.8C612.031 169.533 602.965 173.4 594.031 173.4C585.231 173.4 578.098 170.133 572.631 163.6C567.298 156.933 564.631 147.533 564.631 135.4C564.631 123.267 566.765 111.533 571.031 100.2C575.431 88.7333 581.965 79.0666 590.631 71.2C599.298 63.2 608.965 59.2 619.631 59.2C625.765 59.2 632.031 60.6666 638.431 63.6C624.965 68.4 614.231 77.8666 606.231 92C598.231 106 594.231 119.733 594.231 133.2Z" stroke="#0065A3" stroke-width="5" mask="url(#path-1-outside-1)" />
                <path d="M740.784 67.4C737.051 67.4 733.718 68.6666 730.784 71.2C727.851 73.6 726.384 77.0666 726.384 81.6C726.384 86.1333 727.918 90.4 730.984 94.4C734.184 98.4 738.051 101.933 742.584 105C747.118 107.933 751.651 111 756.184 114.2C760.851 117.267 764.918 121.133 768.384 125.8C771.851 130.333 773.784 135.4 774.184 141C774.184 150.6 770.051 158.667 761.784 165.2C753.518 171.733 743.251 175 730.984 175C718.718 175 709.051 172.533 701.984 167.6C695.051 162.667 691.584 157 691.584 150.6C691.584 144.2 693.518 139.067 697.384 135.2C701.384 131.2 706.318 129.2 712.184 129.2C715.251 129.2 718.118 129.733 720.784 130.8C716.518 135.333 714.384 140.133 714.384 145.2C714.384 150.267 715.784 154.333 718.584 157.4C721.384 160.467 725.184 162 729.984 162C734.784 162 738.784 160.8 741.984 158.4C745.318 155.867 746.984 152.667 746.984 148.8C746.984 144.8 745.851 141.267 743.584 138.2C741.318 135.133 738.451 132.467 734.984 130.2C731.651 127.8 727.984 125.133 723.984 122.2C719.984 119.267 716.251 116.333 712.784 113.4C709.451 110.333 706.651 106.533 704.384 102C702.118 97.3333 700.984 92.2666 700.984 86.8C700.984 77.3333 704.851 69.6 712.584 63.6C720.451 57.4666 730.184 54.4 741.784 54.4C753.518 54.4 762.051 56.6667 767.384 61.2C772.851 65.7333 775.584 71.0666 775.584 77.2C775.584 83.2 773.651 88.3333 769.784 92.6C766.051 96.8666 761.184 99 755.184 99C752.251 99 748.918 98.4 745.184 97.2C748.118 94.6666 750.384 91.8 751.984 88.6C753.584 85.2666 754.384 82 754.384 78.8C754.384 75.6 753.051 72.9333 750.384 70.8C747.718 68.5333 744.518 67.4 740.784 67.4Z" stroke="#0065A3" stroke-width="5" mask="url(#path-1-outside-1)" />
            </svg>



           

        );
}


export default KompasAnim;