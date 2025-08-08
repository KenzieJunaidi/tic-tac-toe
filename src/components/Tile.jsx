import { motion } from "framer-motion";

export const Tile = (props) => {
    return (
        <motion.div className={`tile ${props.winner === null ? "" : "disabled"}`} onClick={() => props.handleClick(props.id)} whileHover={props.text === "" ? {scale: 1.05} : {}}>
            <motion.h3 className="tile-content">{props.text}</motion.h3> 
        </motion.div>
    );
}