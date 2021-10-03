import { motion } from 'framer-motion'

const LoadingPage: React.FC<{ stop: boolean }> = (props) => {

    return (
        <motion.div
            style={{ backgroundColor:"#2e309b"}}
            animate={props.stop ? { width: 52, backgroundColor: "#2e309b", }
            : {
                position: "fixed", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "#2e309b", zIndex: 10
}}>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems:"center" }}>
                <motion.svg
                    animate={props.stop ? { width: 36, height:36 } : { width: 512, height:512 }}
                     viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.rect animate={props.stop ? { width: 36, height: 36 } : { width: 512, height: 512 }} fill="#2e309b" />
                <motion.path
                    d="M256 18.228C208.973 18.228 163.002 32.1731 123.901 58.2998C84.7996 84.4265 54.3237 121.561 36.3273 165.009C18.3309 208.456 13.6222 256.264 22.7967 302.387C31.9712 348.51 54.6168 390.877 87.8698 424.13C121.123 457.383 163.49 480.029 209.613 489.203C255.736 498.378 303.544 493.669 346.991 475.673C390.439 457.676 427.573 427.2 453.7 388.099C479.827 348.998 493.772 303.027 493.772 256C493.701 192.961 468.627 132.524 424.052 87.9482C379.476 43.3726 319.039 18.2989 256 18.228V18.228ZM256 479.772C211.742 479.772 168.478 466.648 131.679 442.06C94.8798 417.471 66.1984 382.523 49.2616 341.634C32.3249 300.745 27.8934 255.752 36.5277 212.344C45.162 168.937 66.4742 129.064 97.7693 97.7693C129.064 66.4742 168.937 45.162 212.344 36.5277C255.752 27.8934 300.745 32.3249 341.634 49.2616C382.523 66.1984 417.471 94.8798 442.06 131.679C466.648 168.478 479.772 211.742 479.772 256C479.705 315.328 456.108 372.206 414.157 414.157C372.206 456.108 315.328 479.705 256 479.772V479.772Z" fill="white" />
                <path d="M397.368 116.328C397.142 115.994 396.886 115.68 396.604 115.392C396.317 115.112 396.007 114.858 395.676 114.632C358.514 77.8096 308.315 57.1512 256 57.1512C203.685 57.1512 153.486 77.8096 116.324 114.632C115.993 114.858 115.683 115.112 115.396 115.392C115.114 115.68 114.858 115.994 114.632 116.328C77.8101 153.488 57.152 203.686 57.152 256C57.152 308.314 77.8101 358.512 114.632 395.672C114.858 396.006 115.114 396.32 115.396 396.608C115.684 396.888 115.996 397.142 116.328 397.368C153.488 434.19 203.686 454.848 256 454.848C308.314 454.848 358.512 434.19 395.672 397.368C396.004 397.142 396.316 396.888 396.604 396.608C396.886 396.32 397.142 396.006 397.368 395.672C434.19 358.512 454.848 308.314 454.848 256C454.848 203.686 434.19 153.488 397.368 116.328V116.328ZM130.4 391.48L143.6 378.28C144.314 377.646 144.89 376.874 145.294 376.009C145.698 375.144 145.921 374.206 145.949 373.252C145.977 372.299 145.81 371.349 145.458 370.462C145.106 369.575 144.576 368.77 143.901 368.095C143.226 367.42 142.42 366.891 141.533 366.539C140.646 366.187 139.696 366.02 138.743 366.049C137.789 366.078 136.851 366.301 135.986 366.705C135.122 367.109 134.349 367.686 133.716 368.4L120.516 381.6C88.7845 347.481 71.1457 302.614 71.1457 256.02C71.1457 209.426 88.7845 164.559 120.516 130.44L133.716 143.64C135.033 144.951 136.816 145.685 138.674 145.681C140.531 145.676 142.311 144.935 143.622 143.618C144.933 142.301 145.667 140.518 145.663 138.66C145.658 136.803 144.917 135.023 143.6 133.712L130.4 120.512C164.519 88.7805 209.386 71.1417 255.98 71.1417C302.574 71.1417 347.441 88.7805 381.56 120.512L368.36 133.712C367.711 134.364 367.196 135.137 366.846 135.987C366.495 136.838 366.316 137.749 366.317 138.669C366.319 139.589 366.502 140.499 366.855 141.348C367.209 142.197 367.726 142.969 368.378 143.618C369.03 144.267 369.803 144.782 370.653 145.132C371.504 145.483 372.415 145.662 373.335 145.661C374.255 145.659 375.165 145.476 376.014 145.123C376.864 144.769 377.635 144.252 378.284 143.6L391.484 130.4C423.215 164.519 440.854 209.386 440.854 255.98C440.854 302.574 423.215 347.441 391.484 381.56L378.284 368.36C376.967 367.049 375.184 366.315 373.326 366.319C371.469 366.324 369.689 367.065 368.378 368.382C367.067 369.699 366.333 371.482 366.337 373.34C366.342 375.197 367.083 376.977 368.4 378.288L381.6 391.488C347.481 423.219 302.614 440.858 256.02 440.858C209.426 440.858 164.559 423.219 130.44 391.488L130.4 391.48Z" fill="white" />
                <path d="M424.104 268.28H400.252V260.48H421.908V250.62H400.252V243.72H424.104V233.86H389.232V278.14H424.104V268.28Z" fill="white" />
                <path d="M138.98 261.512L129.824 233.86H117.964L108.752 261.512L101.98 233.86H90.06L102.952 278.14H114.036L123.896 250.104L133.76 278.14H144.844L157.668 233.86H145.748L138.98 261.512Z" fill="white" />
                <path d="M246.364 108.172L265.64 134.34H276.66V90.06H265.64V116.228L246.364 90.06H235.34V134.34H246.364V108.172Z" fill="white" />
                    <path d="M258.74 394.224C252.168 392.808 250.036 391.904 250.036 389.2C250.036 387.008 252.036 385.332 255.584 385.332C260.194 385.486 264.628 387.137 268.216 390.036L273.816 382.172C268.779 378.04 262.407 375.887 255.896 376.116C245.78 376.116 238.944 381.788 238.944 390.292C238.944 399.188 245.972 401.768 255.444 403.892C261.888 405.44 263.952 406.02 263.952 408.664C263.952 411.064 261.824 412.724 257.7 412.724C252.335 412.643 247.173 410.658 243.136 407.124L236.948 414.536C242.575 419.461 249.84 422.105 257.316 421.948C268.272 421.948 275.036 416.404 275.036 407.512C275.044 399.2 268.668 396.352 258.74 394.224V394.224Z" fill="white" />
                    <motion.path animate={{ rotate: [0, 15, 30, 5, -10, -15, -30, 0] }} transition={{ repeat: Infinity }}
                    d="M249.113 147.431L229.783 254.758C229.634 255.578 229.633 256.418 229.78 257.239L249.11 364.566C249.401 366.181 250.25 367.642 251.509 368.695C252.768 369.747 254.357 370.324 255.997 370.324C257.638 370.324 259.227 369.748 260.486 368.696C261.746 367.645 262.595 366.184 262.887 364.569L282.217 257.242C282.366 256.422 282.367 255.581 282.22 254.761L262.89 147.434C262.599 145.819 261.75 144.358 260.491 143.305C259.232 142.253 257.643 141.676 256.003 141.676C254.362 141.676 252.773 142.252 251.514 143.303C250.254 144.355 249.405 145.816 249.113 147.431V147.431ZM264.485 264.485C262.807 266.164 260.669 267.306 258.341 267.769C256.013 268.232 253.601 267.995 251.408 267.087C249.215 266.178 247.341 264.64 246.022 262.667C244.704 260.693 244 258.373 244 256C244 253.627 244.704 251.307 246.022 249.333C247.341 247.36 249.215 245.822 251.408 244.913C253.601 244.005 256.013 243.768 258.341 244.231C260.669 244.694 262.807 245.836 264.485 247.515C266.736 249.765 268 252.817 268 256C268 259.183 266.736 262.235 264.485 264.485ZM248.253 280.797C253.301 282.364 258.705 282.364 263.753 280.797L256.003 323.834L248.253 280.797ZM263.753 231.209C258.705 229.642 253.301 229.642 248.253 231.209L256.003 188.171L263.753 231.209Z" fill="white"/>

                        </motion.svg>
</div>
        </motion.div>
        );
}

export default LoadingPage;