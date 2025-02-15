import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

const customers = [
  {
    fullName: "Jennifer",
    image:
      "https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU",
    rating: [1, 1, 1, 1, 0.5],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Alexander",
    image:
      "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
    rating: [1, 1, 1, 1, 0],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "John",
    image:
      "https://fastly.picsum.photos/id/113/4168/2464.jpg?hmac=p1FqJDS9KHL70UWqUjlYPhJKBdiNOI_CIH0Qo-74_fU",
    rating: [1, 1, 1, 1, 0.5],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
  {
    fullName: "Sarah",
    image:
      "https://fastly.picsum.photos/id/941/200/300.jpg?blur=5&hmac=197_cw-OcVOT0drCLVS3gr5Py8FMnqfwY-WzUW-5Tek",
    rating: [1, 1, 1, 1, 1],
    says: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
