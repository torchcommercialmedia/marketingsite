import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  BoltIcon,
  ChevronDoubleDownIcon,
  ArrowDownCircleIcon,
  CameraIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { NavLink } from '@/components/NavLink'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

const solutions = [
  {
    name: 'Merchandising Management',
    description: 'Photography Program Management, Window Stickers, and More',
    href: '#',
    icon: CameraIcon,
  },
  {
    name: 'Reconditioning Software',
    description:
      'Condition Reports, Task Assignments, Vehicle Preperation Systems, Repair Order Management',
    href: '#',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'For Service Companies',
    description: 'Book Business with Dealers, Track Invoices and Repair Orders',
    href: '#',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Dallas-Based Service',
    description: 'Dallas Based Photography and Vehicle Reconditioning Services',
    href: '#',
    icon: BoltIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export function ProductMenu() {
  return (
    <Popover className="flex justify-center relative z-50 flex py-5 px-10 shadow">
      <nav className="flex justify-center items-center md:gap-x-12">
        <Logo className="h-10 w-auto" />
        <div className="ml- mx-auto flex max-w-7xl items-center justify-start lg:px-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="/products">Products</NavLink>
          <Popover.Button className="ml-4 inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            All Solutions
            <ArrowDownCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="flex items-center justify-end">
          <div className="">
            <NavLink href="https://app.chromelot.com/signin">Sign in</NavLink>
          </div>
          <Button href="/register" color="blue">
            <span>
              <span className="hidden lg:inline">Get on </span>Waitlist
            </span>
          </Button>
        </div>
      </nav>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-blue-50 sm:flex-col sm:p-6"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="h-6 w-6 text-gray-600 group-hover:text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:border-x sm:border-gray-900/5">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
