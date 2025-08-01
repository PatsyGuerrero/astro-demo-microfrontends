import gsap from 'gsap';
import { cocktailLists, mockTailLists } from '../constants/index';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // 👈 necesario para ScrollTrigger

const Cocktails = () => {
  useGSAP(() => {
    const parllaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 80%',
        once: true, // 👈 se ejecuta una sola vez
        toggleActions: 'play none none none',
        scrub: false // 👈 NO seguir el scroll
      }
    });

    parllaxTimeline
      .from('#c-left-leaf', { x: -100, y: 100 })
      .from('#c-right-leaf', { x: 100, y: 100 });
  });

  return (
    <section id='cocktails' className='noisy'>
      <img src='/images/cocktail-left-leaf.png' alt='l-leaf' id='c-left-leaf' />
      <img src='/images/cocktail-right-leaf.png' alt='r-leaf' id='c-right-leaf' />

      <div className='list'>
        <div className='popular'>
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className='md:me-28'>
                  <h3>{drink.name}</h3>
                  <p>{drink.country} | {drink.detail}</p>
                </div>
                <span>{drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='loved'>
          <h2>Most loved cocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
