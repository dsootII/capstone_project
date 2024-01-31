import Testimonial from "./Testimonial"

export default function TestimonialsSection () {

    return (
        <div className="TestimonialsSectionDiv">
            <h1>Our customers after a meal</h1>
            <div id="TestimonialsCarousel">
            <Testimonial 
                title="Arvind Kejriwal"
                description="Great food for the common man!"
                imageSrc="Wireframe_foodImages/images/kejriwal-4.webp"
            />
            <Testimonial 
                title="Lata Mangeshkar"
                description="AAAAaaaa! OUuuuuu! ummm hmmmmmmm"
                imageSrc="Wireframe_foodImages/images/lata8_0.webp"
            />
            <Testimonial 
                title="Sachin Tendulkar"
                description="Ay vedyaaa, little lemon me nahi khaya toh bat ka grip nikaalke..."
                imageSrc="Wireframe_foodImages/images/Sachin-Tendulkar.jpg"
            />
            </div>
            <button id="top_button_special">Back to Top</button>
        </div>
    )
}