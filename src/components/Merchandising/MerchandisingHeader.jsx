import Image from 'next/image'
import Link from 'next/link'
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/20/solid'
import photographyHeader from '@/images/banners/photographyHeader.jpg'

const cards = [
  {
    name: 'Image Capture',
    description:
      'App-Driven, as well as professional camera workflows supported',
    icon: NewspaperIcon,
    href: '#supportcustomers',
  },
  {
    name: 'Image Processing',
    description: 'AI-Powered Photo Editing, Quality Assurance',
    icon: PhoneIcon,
    href: '#customermanagement',
  },
  {
    name: 'Even More Tools',
    description:
      'Manage multi-step workflows, use AI to write descriptions, and print custom window stickers',
    icon: CurrencyDollarIcon,
    href: '#payandgetpaid',
  },
]

export function MerchandisingHeader() {
  return (
    <div className="relative isolate h-screen overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src={photographyHeader}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
            Merchandising Tools
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Give your customers an extrodinary online shopping experience
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
