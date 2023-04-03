import { InboxIcon, BoltIcon, UsersIcon, PhotoIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Photo Help Desk',
    description:
      'Submit help desk tickets for quick photoshops, or other issue with a vehicle',
    href: '#',
    icon: PhotoIcon,
  },
  {
    name: 'Dedicated Success Manager',
    description:
      'Hop on the phone, or on a video call with your success manager at any time to troubleshoot issues, run ideas by us, and more.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Access to Advanced Skills',
    description:
      'Need graphic design work, web customization work?  Reach out, we have you covered.',
    href: '#',
    icon: BoltIcon,
  },
]

export function RobustSupport() {
  return (
    <div className="bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Robust Suport
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Getting a photo program working well is complex and difficult.  We&apos;re here to get you into great shape, and we&apos;re here to keep you in great shape. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
