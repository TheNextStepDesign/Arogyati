
import * as Scroll from "react-scroll";

const ScrollNav = ({children,to}) => {

  return (
    <Scroll.Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
            {
                children
            }
    </Scroll.Link>
  )
}

export default ScrollNav