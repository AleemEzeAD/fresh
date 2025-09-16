import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/arabicStyle.css';
import leaf from '../assets/index/leaf1.webp';
import banana from '../assets/index/banana.webp';
import eggs from '../assets/index/eggs.webp';
import cake from '../assets/index/cakes.webp';
import food from '../assets/index/storbery.webp';


function Popular() {
    return (
        <section className="Popular">
            <div className='container'>
                <div className='d-flex align-items-center justify-content-center text-center flex-column gap-md-3 gap-2 text position-relative'>
                    <h2>
                        Popular <span>Categories</span>
                    </h2>
                    <p className='desc'>
                        Explore our most-loved product categories, handpicked to make your shopping faster, easier, and more enjoyable.
                    </p>
                    <img rel="preload" as="image" src={leaf} alt="Small leaf" />
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='d-flex align-items-center justify-content-center text-center flex-column h-100 gap-lg-3 gap-2 Banana'>
                            <figure>
                                <img rel="preload" as="image" src={banana} alt="banana a healthy fruit for calories" />
                            </figure>
                            <h5>Banana</h5>
                            <p>Banana A sweet energy-rich tropical fruit.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='d-flex align-items-center justify-content-center text-center flex-column h-100 gap-lg-3 gap-2 Eggs'>
                            <figure>
                                <img rel="preload" as="image" src={eggs} alt="Eggs are healthy to gain protein" />
                            </figure>
                            <h5>Dairy,Eggs</h5>
                            <p>Dairy,Eggs Fresh, protein-rich kitchen staples</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='d-flex align-items-center justify-content-center text-center flex-column h-100 gap-lg-3 gap-2 Cake'>
                            <figure>
                                <img rel="preload" as="image" src={cake} alt="Cake Sweet, colorful treats for every craving" />
                            </figure>
                            <h5>Cakes</h5>
                            <p>Cake Sweet, colorful treats for every craving.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='d-flex align-items-center justify-content-center text-center flex-column h-100 gap-lg-3 gap-2 Food'>
                            <figure>
                                <img rel="preload" as="image" src={food} alt="Cake Sweet, colorful treats for every craving" />
                            </figure>
                            <h5>Frozen Food</h5>
                            <p>Frozen Food Quick, convenient meals made easy.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Popular;
