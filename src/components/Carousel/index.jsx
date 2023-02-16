import { StyledCarousel } from "./style";
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react";

const Carousel = ({ items, setTitleMenu, colorDetails}) => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    const [isActive, setIsActive] = useState(null)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [carousel.current?.offsetWidth])

    const handleSetTitleMenu = (item, i) => {
        setIsActive(i)
        setTitleMenu(item, i)
    }
    
    return (
        <StyledCarousel>
            <motion.div ref={carousel} className="carousel">
                <motion.div 
                    className="inner"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width - 100}}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    >
                    {!items.length?
                        null 
                    : 
                    <motion.div 
                        className={`item`}
                        style={isActive === null ? {color: colorDetails} : null}
                        key={0} 
                        onClick={() => handleSetTitleMenu([], null)}>
                        <span>Todos</span>
                    </motion.div>}
                    {items?.filter(item => {
                        return item?.dishes.length === 0? null : item
                    }).map((item, i) => (
                        <motion.div 
                            className={`item`}
                            style={isActive === i ? {color: colorDetails} : null}
                            key={i} 
                            onClick={() => handleSetTitleMenu(item, i)}>
                            <span>{item.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </StyledCarousel>
    )
}

export default Carousel;