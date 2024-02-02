import pic from '../../../assets/LA.jpg'
import SliderSection from "./SliderSection.jsx";

function SaleProperties() {
    const count = 16;
    const status = 'Sale'

    return (
        <section className="featured portfolio home18 bg-white-3">
            <div className="container-fluid">
                <div className="section-title ml-3">
                    <h3>Recent properties</h3>
                    <h2>FOR SALE</h2>
                </div>
                <SliderSection status={status} count={count} />
            </div>
        </section>
    );
}

export default SaleProperties
