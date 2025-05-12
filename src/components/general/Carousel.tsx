'use client';

import { motion, useAnimation } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define the Card interface
interface Card {
  id: number;
  title: string;
  description: string;
  'bg-image': string;
  href: string;
}

// Function to fetch JSON data
const fetchCards = async (): Promise<Card[]> => {
  const response = await fetch('/data/categories.json'); // Fetch from the public directory
  const data = await response.json();
  return data;
};

export default function ContinuousScroll() {
  const [cards, setCards] = useState<Card[]>([]); // Apply the Card type to the state
  const controls = useAnimation();

  useEffect(() => {
    // Fetch JSON data
    const loadData = async () => {
      const data = await fetchCards();
      setCards(data);
    };

    loadData();

    controls.start({
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 40, // Adjust speed as needed
        },
      },
    });
  }, [controls]);

  const duplicatedCards = [...cards, ...cards]; // Duplicate for seamless loop

  return (
    <div
      className="relative overflow-hidden w-full py-6"
      onMouseEnter={() => controls.stop()} // Stop scrolling on hover
      onMouseLeave={() => controls.start({
        x: ['0%', '-100%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 40, // Slower speed
          },
        },
      })} // Resume scrolling when hover ends
    >
      <motion.div
        className="flex space-x-4 w-max"
        animate={controls}
      >
        {duplicatedCards.map((card, index) => (
          <Link
            key={`${card.id}-${index}`}
            href={card.href}
            className="min-w-[300px] max-w-[300px] bg-white rounded-xl cursor-pointer"
          >
            {/* Card with background image */}
            <div
              className="relative w-full h-[250px] rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${card['bg-image']})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-20 bottom-0"></div> {/* Overlay */}
              <div className="relative z-10 bottom-0 flex items-end h-full">
                <h3 className="font-bold text-white bg-primary flex fit-content text-left py-2 px-4">{card.title} <ArrowRightIcon /> </h3>
                <p className="text-sm text-white">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
