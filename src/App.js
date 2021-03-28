import './App.scss';
import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//images
import heroBG from './assets/Images/BG.jpg';
import beeple from './assets/Images/Beeple.jpg';
import B20Logo from './assets/Images/B20Logo.svg';

//logos
import { ReactComponent as Logo } from './assets/Images/Logo.svg';
import { ReactComponent as Cryptovoxels } from './assets/Images/Cryptovoxels logo.svg';
import { ReactComponent as Discord } from './assets/Images/Discord logo.svg';
import { ReactComponent as Twitter } from './assets/Images/Twitter.svg';
import { ReactComponent as GYB } from './assets/Images/GYB.svg';
import { ReactComponent as GYBT } from './assets/Images/GYB T.svg';

const partners = [
    {
        title: 'abcd',
        image:
            'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/931caf2eb2afc4d4a48cf41c5ec4b081-1616956758381/Screen%20Shot%202021-03-28%20at%2011.39.06%20AM.png?__cld_token__=exp=1616978403~hmac=fb5a1459360c52fcf440e931e5b0aeaec84a56c4ae60afd6a372e5f98846423d',
    },
];

const galleryArray = [
    {
        title: 'Test',
        image: '',
    },
];
function App() {
    return (
        <div className='main_app'>
            <Header />
            <section className='min_height hero_message'>
                <img src={heroBG} alt='' />
                <div className='content_container inherit'>
                    <div className='flex_wrap flex_column inherit'>
                        <div className='main_header'>Ultimate NFT Access</div>
                        <p>Exclusive NFTs for serious collectors</p>
                        <div className='button'>START COLLECTING</div>
                        <a href='#'>Learn More</a>
                    </div>
                </div>
            </section>
            <section className='boast_box'>
                <img src={beeple} className='beeple' alt='' />
                <div className='content_container'>
                    <div className='flex_wrap'>
                        <img src={B20Logo} alt='' />
                        <div className='texts_wrap'>
                            <h1>Don't miss the next B.20</h1>
                            <p>
                                GYP Members got the first distribution of B.20s.{' '}
                                <br />
                                Don't miss the next one!
                            </p>
                            <a href='#'>Read about GYB and B.20 ></a>
                            <a href='#'>
                                Learn about our other notable projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='trust_box'>
                <div className='content_container'>
                    <div className='flex_wrap'>
                        <div className='text_wrap'>
                            <h1>The place to be for NFTs</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Odio quis quos doloremque, sit
                                excepturi libero reiciendis et ad nam quas vel
                                aperiam mollitia voluptatum illum accusantium
                                voluptates cupiditate, natus sint?
                            </p>
                        </div>
                        <div className='communities_wrap'>
                            <div className='item'>
                                <Discord />
                                JOIN THE COMMUNITY
                            </div>
                            <div className='item'>
                                <Cryptovoxels />
                                VISIT OUR HQ
                            </div>
                            <div className='item'>
                                <Twitter />
                                FOLLOW ON TWITTER
                            </div>
                            <div className='item'>
                                <GYBT />
                                GET AN ACCESS PASS
                            </div>
                            <div className='item full_width'>
                                Click here to ask us anything! <GYB />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='benefits'>
                <div className='content_container'>
                    <div className='heading'>
                        We simplify NFTs so you can confidently{' '}
                        <strong>EXPLORE, ENGAGE</strong> and{' '}
                        <strong>INVEST.</strong>
                    </div>
                    <iframe
                        className='youtube_wrap'
                        src='https://www.youtube.com/embed/9xwazD5SyVg'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>

                    <div className='contents_wrap'>
                        <div className='content'>
                            <h1>Newbie-Friendly</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Qui odio dicta explicabo
                                debitis quam a beatae
                            </p>
                        </div>
                        <div className='content'>
                            <h1>Newbie-Friendly</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Qui odio dicta explicabo
                                debitis quam a beatae
                            </p>
                        </div>
                        <div className='content'>
                            <h1>Newbie-Friendly</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Qui odio dicta explicabo
                                debitis quam a beatae
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='partners'>
                <div className='content_container'>
                    <h1>Our World-Class Creators and Partners</h1>
                    <div className='flex_wrap partners_items_wrap'>
                        {partners.map((el, index) => (
                            <div className='partner' key={index}>
                                <img src={el.image} alt={el.title} />
                                {el.title}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='gallery'>
                <div className='content_container'>
                    <p>Explore our</p>
                    <h1>PREMIUM NFT GALLERY</h1>
                    <OwlCarousel className='owl-theme' loop margin={10} nav>
                        {galleryArray.map((el, index) => (
                            <div className='gallery_card' key={index}>
                                <img src={el.image} alt='' />
                                <div className='title'>{el.title}</div>
                            </div>
                        ))}
                    </OwlCarousel>
                    <a href='#' className='button'>
                        SHOP GALLERY
                    </a>
                </div>
            </section>
            <section className='social'>
                <div className='content_container'>
                    <div className='flex_wrap'>
                        <p>JOIN THE CONVERSATION</p>
                    </div>
                </div>
            </section>
            <footer>
                <div className='content_container'>
                    <div className='flex_wrap'>
                        <div className='details'>
                            <GYBT />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam officiis minus qui
                                ducimus a quis, odio iste blanditiis amet sequi
                                aut. Officiis sit doloremque cumque soluta
                                aliquid eligendi, sequi exercitationem?
                            </p>
                            <div className='copyright'>
                                Lorem Ipsum is simple
                            </div>
                        </div>
                        <div className='links_wrap'>
                            <a href='#' className='link_item'>
                                ABOUT
                            </a>
                            <a href='#' className='link_item'>
                                USER FAQ
                            </a>
                            <a href='#' className='link_item'>
                                NFT CREATOR FAQ
                            </a>
                            <a href='#' className='link_item'>
                                CREATORS
                            </a>
                            <a href='#' className='link_item'>
                                CONTACT US
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const Header = () => {
    const [isSticked, setSticked] = useState(false);
    useEffect(() => {
        function stickHeaderHandler(e) {
            if (e.currentTarget.scrollY >= 5) {
                setSticked(true);
            } else if (e.currentTarget.scrollY < 5) {
                setSticked(false);
            }
        }
        window.addEventListener('scroll', stickHeaderHandler);

        return () => {
            window.removeEventListener('scroll', stickHeaderHandler);
        };
    }, []);

    return (
        <header className={isSticked ? 'active' : ''}>
            <div className='content_container'>
                <div className='flex_wrap flex_space_between'>
                    <Logo className='logo' />
                    <div className='buttons_wrap'>
                        <button>SIGN IN</button>
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default App;
