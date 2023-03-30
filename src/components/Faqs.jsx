import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can you train my photograher?',
      answer:
        'Yes!  Set up a consultation call to get your photographer Chrome Lot certified',
    },
    {
      question: 'Is there a contract?',
      answer: 'Nope!  Pay as you go, cancel when you want.',
    },
  ],
  [
    {
      question: 'Can I customize the reports?',
      answer:
        'Yes you can, you can drag and drop reports, as well as create custom reports yourself',
    },
    {
      question:
        'How long does it take to get set up?',
      answer:
        'You can get set up in under a month with all of our solutions',
    },
    {
      question:
        'Should I use a camera, or the phone app?',
      answer:
        'Fastest set up and easiest training time?  Use the app.  Want the best possible quality?  Use the camera.',
    },
  ],
  [
    {
      question: 'Is there per-rooftop pricing?',
      answer:
        'Nope, one price for your whole business?',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'Yes!  More inventory features are soon to come',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
