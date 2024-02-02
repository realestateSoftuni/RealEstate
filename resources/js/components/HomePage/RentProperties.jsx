import pic from '../../../assets/Miami.jpg'
import SliderSection from "./SliderSection.jsx";

function RentProperties() {
    const count = 16;
    const status = 'Rent'

    return (
        <section className="featured portfolio home18 bg-white">
            <div className="container-fluid">
                <div className="section-title ml-3">
                    <h3>Recent properties</h3>
                    <h2>FOR RENT</h2>
                </div>
                <SliderSection status={status} count={count} />
            </div>
        </section>
    );
}

export default RentProperties
