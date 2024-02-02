import React from "react";
import toggleActive from "../../utilities/toogleActive.js";
import LayoutAll from "./MainLayout/LayoutAll.jsx";
class FAQs extends React.Component {
    handleItemClick = (event) => {
        const allListItems = document.querySelectorAll('.accordion-1 .element');

        allListItems.forEach(item => item.classList.remove('active'));

        toggleActive(event.currentTarget);
    }
    render() {

        return (
            <LayoutAll>
                <div className="inner-pages ui-elements hd-white">
                    <section className="headings">
                        <div className="text-heading text-center">
                            <div className="container">
                                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                            </div>
                        </div>
                    </section>

                    <section className="faq service-details bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <h5 className="uppercase mb40">Questions about Selling</h5>
                                    <ul className="accordion accordion-1 one-open">
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>How do I prepare my home for sale?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Start by decluttering, making necessary repairs, and enhancing curb appeal.
                                                    Consider staging to showcase your home's potential.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>What documents do I need when selling my home?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Gather essential documents, including the property deed, recent tax bills,
                                                    mortgage details, and any relevant home improvement records.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>How is the selling price of my home determined?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    The selling price is influenced by factors like market conditions,
                                                    comparable home sales, your property's condition, and location.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>Should I hire a real estate agent to sell my home?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    While it's possible to sell on your own, a real
                                                    estate agent can provide expertise, market knowledge, and assistance
                                                    throughout the selling process.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>What is the best time to sell a home?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Spring and early summer are often considered ideal, but the best
                                                    time depends on local market conditions. Consult with your real
                                                    estate agent for personalized advice.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>What closing costs should I expect when selling my home?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Closing costs may include agent commissions, transfer taxes,
                                                    title insurance, and other fees. Your real estate agent can provide a breakdown.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>How can I make my home stand out to potential buyers?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Highlight unique features, ensure a clean and well-maintained interior,
                                                    and consider professional staging to make your home more appealing.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span>What should I disclose to potential buyers about my property?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Disclose any known issues or defects, past repairs, and environmental
                                                    concerns to maintain transparency and build trust with buyers.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="element" onClick={this.handleItemClick}>
                                            <div className="title">
                                                <span> How can I negotiate effectively with potential buyers?</span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Be open to negotiations, understand market conditions,
                                                    and work with your real estate agent to find mutually beneficial solutions.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            <div className="col-lg-12 col-md-12">
                                <h5 className="uppercase mb40">Questions about Renting</h5>
                                <ul className="accordion accordion-1 one-open">
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>What documents do I need to provide when renting a property?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Typically, you'll need to provide proof of identity, proof of income,
                                                references, and a completed rental application.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>How can I find rental properties in my preferred location?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Utilize online rental platforms, work with a real estate agent, or explore
                                                local classifieds to find available rental listings.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>What factors should I consider when choosing a rental property?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Consider factors such as location, rental price, amenities, proximity
                                                to schools or workplaces, and lease terms before making a decision.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>What is the typical duration of a lease agreement?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Lease agreements commonly range from 6 to 12 months, but the duration can vary.
                                                Discuss lease terms with the landlord before signing.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>How much should I budget for utilities in a rental property?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Budget for utilities such as electricity, water, gas, and internet separately.
                                                Check with the landlord or property management for specific details.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>Can I make modifications to a rental property, such as painting or installing fixtures?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Most modifications require landlord approval. Discuss any desired
                                                changes with the landlord and obtain written consent before making alterations.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>What is renter's insurance, and do I need it?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Renter's insurance protects your personal belongings in case of theft or damage.
                                                While not mandatory, it's highly recommended for added protection.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span>How does the rental application process work?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Complete a rental application, provide required documents, undergo a background check,
                                                and await approval from the landlord or property management.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="element" onClick={this.handleItemClick}>
                                        <div className="title">
                                            <span> What are my responsibilities as a tenant regarding property maintenance?</span>
                                        </div>
                                        <div className="content">
                                            <p>
                                                Typically, tenants are responsible for basic maintenance tasks,
                                                such as keeping the property clean and reporting any repairs needed promptly.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </LayoutAll>
        )
    }
}

export default FAQs
