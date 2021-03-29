import './App.scss';
import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//images
import heroBG from './assets/Images/BG.jpg';
import beeple from './assets/Images/Beeple.jpg';
import B20Logo from './assets/Images/B20Logo.jpg';

//Gallery
import gal1 from './assets/Images/Gallery/1.jpg';
import gal2 from './assets/Images/Gallery/2.jpg';
import gal3 from './assets/Images/Gallery/3.jpg';
import gal4 from './assets/Images/Gallery/4.jpg';
import gal5 from './assets/Images/Gallery/5.jpg';

//Partner
import metapurse from './assets/Images/Partners/Metapurse.jpg';
import b20 from './assets/Images/Partners/B20.jpg';
import gala from './assets/Images/Partners/gala.jpg';
import niftygateway from './assets/Images/Partners/niftygateway.jpg';
import opensea from './assets/Images/Partners/opensea.jpg';
import alienworlds from './assets/Images/Partners/alienworlds.jpg';
import nftshowroom from './assets/Images/Partners/nftshowroom.jpg';
import terravirtua from './assets/Images/Partners/terravirtua.jpg';
import ghostmarket from './assets/Images/Partners/ghostmarket.jpg';
import mybae from './assets/Images/Partners/mybae.jpg';
import avastars from './assets/Images/Partners/Avastars.jpg';
import fenwick from './assets/Images/Partners/Fenwick.jpg';
import flamingodao from './assets/Images/Partners/flamingodao.jpg';
import sandbox from './assets/Images/Partners/Sandbox.jpg';
import blake from './assets/Images/Partners/blake.png';

//logos
import { ReactComponent as Logo } from './assets/Images/Logo.svg';
import { ReactComponent as Cryptovoxels } from './assets/Images/Cryptovoxels logo.svg';
import { ReactComponent as Discord } from './assets/Images/Discord logo.svg';
import { ReactComponent as Twitter } from './assets/Images/Twitter.svg';
import { ReactComponent as GYB } from './assets/Images/GYB.svg';
import { ReactComponent as GYBT } from './assets/Images/GYB T.svg';

//social icons
import { ReactComponent as TwitterSocial } from './assets/Images/SocialIcons/Twitter.svg';
import { ReactComponent as DiscordSocial } from './assets/Images/SocialIcons/Discord.svg';
import { ReactComponent as InstagramSocial } from './assets/Images/SocialIcons/Instagram.svg';
import { ReactComponent as MediumSocial } from './assets/Images/SocialIcons/Medium.svg';
import { ReactComponent as YouTubeSocial } from './assets/Images/SocialIcons/YouTube.svg';

const partners = [
    {
        title: 'metapurse.fund',
        image: metapurse,
    },
    {
        title: 'b20.metapurse.fund',
        image: b20,
    },
    {
        title: 'sandbox.game',
        image: sandbox,
    },
    {
        title: 'niftygateway.com',
        image: niftygateway,
    },
    {
        title: 'opensea.io',
        image: opensea,
    },
    {
        title: 'alienworlds.io',
        image: alienworlds,
    },
    {
        title: 'terravirtua.io',
        image: terravirtua,
    },
    {
        title: 'nftshowroom.com',
        image: nftshowroom,
    },
    {
        title: 'ghostmarket.io',
        image: ghostmarket,
    },
    {
        title: 'mybae.io',
        image: mybae,
    },
    {
        title: 'avastars.io',
        image: avastars,
    },
    {
        title: 'fenwick.com',
        image: fenwick,
    },
    {
        title: 'flamingodao.xyz',
        image: flamingodao,
    },
    {
        title: 'gala.games',
        image: gala,
    },
    {
        title: 'blake.art',
        image: blake,
    },
];

const galleryArray = [
    {
        title: "Salvador Satoshi - Heaven's Fall GhostMarket",
        image: gal1,
    },
    {
        title: 'Magusz: Shattered Ghost Market',
        image: gal2,
    },
    {
        title: 'Magusz: Neon Eye Skull Ghost Market',
        image: gal3,
    },
    {
        title: 'Rotating Cubes Paul Petersen',
        image: gal4,
    },
    {
        title: 'Dancing Gold in the Vault Paul Petersen',
        image: gal5,
    },
    {
        title: "Salvador Satoshi - Heaven's Fall GhostMarket",
        image: gal1,
    },
    {
        title: 'Magusz: Shattered Ghost Market',
        image: gal2,
    },
    {
        title: 'Magusz: Neon Eye Skull Ghost Market',
        image: gal3,
    },
    {
        title: 'Rotating Cubes Paul Petersen',
        image: gal4,
    },
    {
        title: 'Dancing Gold in the Vault Paul Petersen',
        image: gal5,
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
                        <a href='http://www.google.com'>Learn More</a>
                    </div>
                </div>
            </section>
            <section className='boast_box'>
                <img src={beeple} className='beeple' alt='' />
                <div className='content_container'>
                    <div className='flex_wrap'>
                        <img src={B20Logo} className='logo' alt='' />
                        <div className='texts_wrap'>
                            <h1>Don't miss the next B.20</h1>
                            <p>
                                GYP Members got the first distribution of B.20s.{' '}
                                <br />
                                Don't miss the next one!
                            </p>
                            <a href='http://www.google.com'>
                                Read about GYB and B.20 >
                            </a>
                            <a href='http://www.google.com'>
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
                                Discuss NFTs, and discover new opportunities in
                                the GYB Discord community, where thousands of
                                NFT enthusiasts gather daily. Visit the
                                <i> Swifty Nifty Lounge</i> (our Cryptovoxels
                                headquarters), follow us on Twitter, or get an
                                Access Pass for exclusive deals.
                            </p>
                            <p>
                                We specialize in distributing one-of-a-kind
                                assets and providing first-look opportunities on
                                exclusive deals to our Access Pass holders.
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
                            <div className='item gyb'>
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
                    <div className='youtube_wrap'>
                        <iframe
                            className='inherit'
                            src='https://www.youtube.com/embed/9xwazD5SyVg'
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                    </div>
                    <div className='contents_wrap'>
                        <div className='content'>
                            <h1>Newbie-Friendly</h1>
                            <p>
                                No experience? No problem. Get information and
                                support in our GYB community or full concierge
                                service with a paid plan.
                            </p>
                        </div>
                        <div className='content'>
                            <h1>Exceptional Value</h1>
                            <p>
                                Our partnerships with industry innovators and
                                sought-after creators results in unique
                                opportunities for high-value deals, and
                                exceptional ROI.
                            </p>
                        </div>
                        <div className='content'>
                            <h1>Curated Opportunities</h1>
                            <p>
                                All paid memberships receive monthly
                                distributions of premium NFTs. No more wondering
                                how to find the best deals and how to get in on
                                them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='partners'>
                <div className='content_container'>
                    <h1>Our World-Class Creators and Partners</h1>
                    <div className='flex_wrap partners_items_wrap dont_adjust_sm'>
                        {partners.map((el, index) => (
                            <a
                                href={'//' + el.title}
                                target='_blank'
                                className='partner'
                                rel='noreferrer'
                                key={index}>
                                <img src={el.image} alt={el.title} />
                                {el.title}
                            </a>
                        ))}

                        {/* <div className='partner you' key={'you'}>
                            <img src={you} alt={'You'} />
                            <span>YOU!</span>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className='gallery'>
                <div className='content_container'>
                    <p className='sub_text'>Explore our</p>
                    <h1>PREMIUM NFT GALLERY</h1>
                    <div className='carousel_main_wrap flex_wrap'>
                        <OwlCarousel
                            className='owl-theme'
                            rewind={true}
                            loop={true}
                            margin={20}
                            nav={true}
                            responsiveClass={true}
                            responsive={{
                                0: {
                                    items: 1,
                                    nav: true,
                                },
                                600: {
                                    items: 2,
                                    nav: false,
                                },
                                1000: {
                                    items: 5,
                                    nav: true,
                                    loop: false,
                                },
                            }}
                            dotClass={'hide'}>
                            {galleryArray.map((el, index) => (
                                <div className='gallery_card' key={index}>
                                    <img src={el.image} alt='' />
                                    <div className='title'>{el.title}</div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                    <a href='http://www.google.com' className='button'>
                        SHOP GALLERY
                    </a>
                </div>
            </section>
            <section className='social'>
                <div className='content_container'>
                    <div className='flex_wrap dont_adjust_sm'>
                        <p>JOIN THE CONVERSATION</p>
                        <a
                            href='https://twitter.com/growyourbase_'
                            target='_blank'
                            rel='noreferrer'>
                            <TwitterSocial className='social_icon' />
                        </a>
                        <a
                            href='https://discordapp.com/invite/CX98bBr'
                            target='_blank'
                            rel='noreferrer'>
                            <DiscordSocial className='social_icon' />
                        </a>
                        <a
                            href='https://www.youtube.com/channel/UC7dR9fAwYDch2MXgB0Uhd6Q'
                            target='_blank'
                            rel='noreferrer'>
                            <YouTubeSocial className='social_icon' />
                        </a>
                        <a
                            href='https://medium.com/growyourbase'
                            target='_blank'
                            rel='noreferrer'>
                            <MediumSocial className='social_icon' />
                        </a>
                        <a
                            href='https://www.instagram.com/growyourbase/'
                            target='_blank'
                            rel='noreferrer'>
                            <InstagramSocial className='social_icon' />
                        </a>
                    </div>
                </div>
            </section>
            <footer>
                <div className='content_container'>
                    <div className='flex_wrap'>
                        <div className='details'>
                            <GYBT />
                            <p>
                                GrowYourBase is the leading membership-based
                                platform for NFT enthusiasts, investors,
                                creators, and collectors. Community members get
                                access to education, support, industry-first
                                announcements, educational resources, rare
                                collection opportunities and more.
                            </p>
                            <div className='copyright'>
                                @2021 GrowYourBase, LLC. All rights reserved.
                                Terms of Use. Privacy Policy.
                            </div>
                        </div>
                        <div className='links_wrap'>
                            <a
                                href='http://www.google.com'
                                className='link_item'>
                                About Us
                            </a>
                            <a
                                href='http://www.google.com'
                                className='link_item'>
                                Creators Program
                            </a>
                            <a
                                href='http://www.google.com'
                                className='link_item'>
                                Hunters Program
                            </a>
                            <a
                                href='http://www.google.com'
                                className='link_item'>
                                Member FAQ
                            </a>
                            <a
                                href='http://www.google.com'
                                className='link_item'>
                                Creator FAQ
                            </a>
                            <a
                                href='http://www.google.com'
                                className='link_item'>
                                Blog
                            </a>
                            <a
                                href='http://www.google.com'
                                className='link_item'>
                                Contact Us
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
                <div className='flex_wrap flex_space_between dont_adjust_sm'>
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
