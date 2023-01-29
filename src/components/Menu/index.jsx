import { formatCurrency } from "../../utils/formtCurrency";
import { StyledMenu } from "./style";

const Menu = ({ menu }) => {

    return(
        <StyledMenu>
            {menu?.filter(item  => {
                    return item.dishes.length === 0? null : item
                }).map((item, i) => (
                <div key={i}>
                    <div className="title">
                        <div><b>|</b></div>
                        <h1>{item.name}</h1>
                    </div>
                    <section>
                        {item.dishes.map((item, i) => (
                            <div key={i}>
                                <h1 className="header">{item.name}</h1>
                                <p>{item.description}</p>
                                <hr />
                                <span>{formatCurrency(item.price)}</span>
                            </div>
                        ))}
                    </section>
                </div>
            ))}
        </StyledMenu>
    )
}

export default Menu;