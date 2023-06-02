import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import ServiceHeaderPic from '@/images/screenshots/ServiceHeaderPic.jpg'
import Link from 'next/link'

const cards = [
  {
    name: 'Photographer Management',
    description:
      'We can train your photographer, edit all your photos, and QA every car',
    icon: NewspaperIcon,
    href: '#supportcustomers',
  },
  {
    name: 'Design Support',
    description:
      'Graphic design for photo overlays, website elements, marketing materials, and more',
    icon: PhoneIcon,
    href: '#customermanagement',
  },
  {
    name: 'Ad Buying',
    description:
      'Professional, targeted, pay-per-click ads, with an experienced ad manager',
    icon: CurrencyDollarIcon,
    href: '#payandgetpaid',
  },
]

export function AgencyHeader() {
  return (
    <div className="relative isolate h-screen w-full overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src={ServiceHeaderPic}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full
         object-cover object-right opacity-20 md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Agency Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Graphic design, photography, and marketing programs are hard. Let us
            step in and help.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <Link
              key={card.name}
              href={card.href}
              className="flex cursor-pointer gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 hover:bg-white/20 hover:ring-white/70"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
