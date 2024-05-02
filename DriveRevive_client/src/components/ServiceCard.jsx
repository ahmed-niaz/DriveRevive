import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ServiceCard = ({ serve }) => {
  const { title, img, price } = serve;
  return (
    <main>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[340px] w-full" src={img} alt={img} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex text-[#FF3811] font-bold">
            <p>Price: ${price}</p>
            <Link className="text-[#FF3811] font-bold">
              <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
ServiceCard.propTypes = {
  serve: PropTypes.object,
};
export default ServiceCard;
