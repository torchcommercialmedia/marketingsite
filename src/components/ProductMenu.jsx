import { Fragment } from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  BoltIcon,
  ArrowDownCircleIcon,
  CameraIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { NavLink } from '@/components/NavLink'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import clsx from 'clsx'

const solutions = [
  {
    name: 'Merchandising Management',
    description: 'Photography Program Management, Window Stickers, and More',
    href: '/merchandising',
    icon: CameraIcon,
  },
  {
    name: 'Reconditioning Software',
    description:
      'Condition Reports, Task Assignments, Vehicle Preperation Systems, Repair Order Management',
    href: '/reconditioning',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'For Service Companies',
    description: 'Book Business with Dealers, Track Invoices and Repair Orders',
    href: '/service',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Design and Marketing Agency',
    description: 'Advanced Support Customized to Your Dealership',
    href: '#',
    icon: BoltIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/merchandising">Merchandising</MobileNavLink>
            <MobileNavLink href="/reconditioning">
              Recon Management
            </MobileNavLink>
            <MobileNavLink href="service">For Service Companies</MobileNavLink>
            <MobileNavLink href="/design">Design Agency</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function ProductMenu() {
  return (
    <nav>
      <Popover className="relative z-50 flex w-full justify-around bg-white py-5 px-10 shadow">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
        <div className="ml- mx-auto flex max-w-7xl items-center justify-start lg:px-8">
          <Popover.Button className="ml-4 hidden items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 sm:inline-flex">
            Solutions
            <ArrowDownCircleIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="nowrap flex items-center justify-end">
          <div className="mr-5 hidden sm:block">
            <NavLink href="https://app.chromelot.com/signin">Sign in</NavLink>
          </div>
          <Button href="/register" color="blue">
            <span>
              <span className="hidden lg:inline">Get on </span>Waitlist
            </span>
          </Button>
        </div>
        <div className="ml-2 block items-center sm:hidden">
          <MobileNavigation />
        </div>
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
                <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:border-x sm:border-gray-900/5">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400 group-hover:text-red-600"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="block bg-gray-50 py-2 px-3 sm:hidden">
              <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:border-x sm:border-gray-900/5">
                <Button
                  href="https://app.chromelot.com/signin"
                  color="blue"
                  className="w-auto px-2"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </nav>
  )
}
