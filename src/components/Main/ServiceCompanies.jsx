import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Automatic Invoicing',
    description:
      'Automatic rolling invoices aggregate all the services you perform for your dealer customers',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Schedule and Job Management',
    description:
      'Get requests from dealers, and easily set up and work your own schedule',
    icon: LockClosedIcon,
  },
  {
    name: 'Custom Tookit',
    description:
      'Utilize our merchandising toolkit to provide top-notch photography services to your dealer customers',
    icon: ServerIcon,
  },
]

export function ServiceCompanies() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Chrome Lot for Service Companies
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                360 business management for shops and service business that
                service dealers{' '}
                <span className="font-bold leading-6 text-sky-600 hover:underline">
                  <Link href="/service">Learn More →</Link>
                </span>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
