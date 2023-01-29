import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/formtCurrency";
import { StyledMenu } from "./style";

function Menu2({ menu }) {
  const navigate = useNavigate();

  return (
    <StyledMenu>
      {menu?.filter((item) => {
          return item.dishes.length === 0 ? null : item;
        })
        .map((item, i) => (
          <div key={i} >
            <div className="title">
              <div>
                <b>|</b>
              </div>
              <h1>{item.name}</h1>
            </div>
            {item.dishes.map((item, i) => (
              <div key={i} className="box" onClick={() => navigate(`/menu/details/${item._id}`)}>
                <div className="description">
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <hr />
                  <span>{formatCurrency(item.price)}</span>
                </div>
                <div className="image">
                  <img src={item.image} />
                </div>
              </div>
            ))}
          </div>
        ))}
    </StyledMenu>
  );
}

export default Menu2;
