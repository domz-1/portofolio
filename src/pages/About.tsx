    import SectionTitle from '../components/SectionTitle';
    import AltStack from '../components/AltStarck';
import AboutText from '../components/AboutText';
import Picture from '../components/Picture';
import PicTwo from '../assets/pic-2.png'
// import { useEffect } from 'react';


    const About = () => {

    return (
        <>
        <AltStack className='' id='about'  >
        <SectionTitle title='About' body='Get to know me' />
        <div className='about-wrapper'>
        <Picture src={PicTwo}/>
        <AboutText/>
        </div>
        </AltStack>
        </>
    );
    }

    export default About;