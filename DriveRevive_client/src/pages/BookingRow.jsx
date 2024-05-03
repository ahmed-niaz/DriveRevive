import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
const BookingRow = ({ booking,handleDelete }) => {
  const { _id,img, customer_name, price, service, date } = booking;
 
  return (
    <tr className="">
      <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm bg-[#DD3811] text-white outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="mask  w-12 h-12">
            {img && <img src={img} alt={img} />}
          </div>
        </div>
      </td>
      <td>{customer_name}</td>
      <td>{service}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};
BookingRow.propTypes ={
    booking: PropTypes.object,
}
export default BookingRow;
