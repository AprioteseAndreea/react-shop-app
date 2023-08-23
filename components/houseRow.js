import currencyFormatter from "../helpers/currencyFormatter";
import dashboardStyles from './dashboard.module.css';

const ProductCard = ({ house }) => {
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

export default HouseRow;
