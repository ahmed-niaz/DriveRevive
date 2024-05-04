import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Booking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:3000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm(`Are you sure to delete`);
    if (proceed) {
      fetch(`http://localhost:3000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Success",
              text: "Want to cancel your booking",
              icon: "success",
            });
            const remaining = bookings.filter((book) => book._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = id =>{
    fetch(`http://localhost:3000/checkout/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({status: "confirm"})
    })
    .then(res=>res.json())
    .then(data=>{
     console.log(data)
     if(data.modifiedCount>0){
      // sweet2 alert
      const remaining = bookings.filter(book => book._id !== id)
      const updated = bookings.find(booked => booked._id === id)
      updated.status = 'confirm'
      const newBookings = [
        updated,
        ...remaining
      ]
      setBookings(newBookings)
     }
    })
  }
  return (
    <main>
      <Navbar />
      <div className="overflow-x-auto container mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th></th>
              <th>Customer Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm = {handleConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </main>
  );
};

export default Booking;
