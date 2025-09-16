import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/arabicStyle.css';
import carrots from '../assets/index/carrots.webp';
import Radishes from '../assets/index/Radishes.webp';
import Combos from '../assets/index/Combos.webp';


const blogPosts = [
    {
        id: 1,
        image: carrots,
        category: 'carrots',
        date: 'July 10, 2025',
        title: 'Why Carrots Are a Must in Your Daily Diet',
        description: 'Carrots are packed with beta-carotene, fiber, and antioxidants. Discover their full benefits.',
        link: '#'
    },
    {
        id: 2,
        image: Radishes,
        category: 'Vegetables',
        date: 'July 09, 2025',
        title: 'The Power of Radishes: Crunchy & Healthy',
        description: 'Radishes help with digestion and are rich in Vitamin C. Learn how to use them in meals.',
        link: '#'
    },
    {
        id: 3,
        image: Combos,
        category: 'Fruits',
        date: 'July 08, 2025',
        title: 'Fruit Combos That Boost Immunity',
        description: 'Strawberries and oranges are a great source of Vitamin C. Perfect for breakfast bowls.',
        link: '#'
    },
];

const Blogs = () => {
    return (
        <section className="Blogs">
            <div className="container">
                <h2 className="heading">Latest <span>Blogs</span></h2>
                <div className="row">
                    {blogPosts.map(post => (
                        <div key={post.id} className="col-md-4">
                            <div className="blog-card">
                                <div className="image-wrapper">
                                    <img rel="preload" as="image" src={post.image} alt={post.title} />
                                </div>
                                <div className="content">
                                    <p className="meta d-flex flex-wrap gap-1">
                                        <span className="category">{post.category}</span>
                                        <span className="date">{post.date}</span>
                                    </p>
                                    <h5 className="title">{post.title}</h5>
                                    <p className="description">{post.description}</p>
                                    <a href={post.link} className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
