import {motion} from 'framer-motion'

function MotionLayout(props) {

    console.log(props)

    return ( 
        <motion.div
        exit={{ opacity: 0, y:30 }}
        transition={{duration: 1, ease: "easeOut"}}
        initial={{ opacity: 0, y:30 }}
        animate={{ opacity: 1, y:0 }}
        >
            {props.children}
        </motion.div>
     );
}

export default MotionLayout;