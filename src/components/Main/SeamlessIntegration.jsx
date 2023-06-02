import {
  CalendarIcon,
  CloudArrowUpIcon,
  CurrencyDollarIcon,
  LifebuoyIcon,
  LockClosedIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Task Assignment & Repair Orders',
    description:
      'Integrate Vendors with your task management system, and approve and track the status of repair orders',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Appointments and Scheduling',
    description: 'Schedule appointments in-app, and track the status of jobs',
    icon: CalendarIcon,
  },
  {
    name: 'Products & Invoicing',
    description:
      'Set up products for dealers, and automatically invoice and track payments',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Helpdesk Support',
    description: 'Get support from vendors with a built in helpdesk system',
    icon: LifebuoyIcon,
  },
]

export function SeamlessIntegration() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Seamless Integration
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dealer Vendor Synchronization
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600"></p>
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
            <img
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
