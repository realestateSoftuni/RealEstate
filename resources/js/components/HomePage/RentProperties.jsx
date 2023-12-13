import pic from '../../../assets/Miami.jpg'
import SliderSection from "./SliderSection.jsx";

function SaleProperties() {
    return (
        <section className="featured portfolio home18 bg-white">
            <div className="container-fluid">
                <div className="section-title ml-3">
                    <h3>Recent properties</h3>
                    <h2>FOR SALE</h2>
                </div>
                <SliderSection pic={pic} />
            </div>
        </section>
    );
}

export default SaleProperties
