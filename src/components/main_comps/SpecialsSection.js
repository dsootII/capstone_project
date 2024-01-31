import Special from "./Special"

export default function SpecialsSection () {

    return (
        <div className="SpecialsSectionDiv">
            <h1>Today's Specials!</h1>
            <div id="SpecialsCarousel">
            <Special 
                title="Greek Salad"
                description="A really really old Salad made by a long-dead Greek guy. Herodotus says its great!"
                imageSrc="Wireframe_foodImages/images/greek salad.jpg"
            />
            <Special 
                title="Kulcha"
                description="This straight up slaps bro, no cap. Order in small quantities."
                imageSrc="Wireframe_foodImages/images/kulcha.jpg"
            />
            <Special 
                title="Lemon Dessert"
                description="Ay! There's a lemon in the restaurant's name, AND in this food dish! Now that's what I call grade-A poetry."
                imageSrc="Wireframe_foodImages/images/lemon dessert.jpg"
            />
            </div>
            <button id="order_button_special">Checkout full menu</button>
        </div>
    )
}

