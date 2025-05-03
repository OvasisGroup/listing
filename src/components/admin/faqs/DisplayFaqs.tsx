/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Section = {
  id: number;
  maintitle: string;
};

type FAQ = {
  id: number;
  title: string;
  description: string;
  sectionId: number;
  section: Section;
};

const FAQAccordion: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/faqs');
        if (!res.ok) throw new Error('Failed to fetch FAQs');
        const data: FAQ[] = await res.json();
        setFaqs(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) return <p className="text-center">Loading FAQs...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Accordion type="multiple">
        {faqs.map((faq) => (
            
          <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
            <p className="text-sm text-muted-foreground mt-2 italic">
                Section: {faq.section.maintitle}
              </p>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>
              <p>{faq.description}</p>
              
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
