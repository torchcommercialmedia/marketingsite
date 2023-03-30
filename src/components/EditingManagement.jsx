import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'End-to-End Photo Editing',
    description:
      'Our editors crop, straighten, color corret, and exposure correct every image.  We remove duplicates, bad images, and sort everything into a consistent order for you. ',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Background Replacement',
    description: 'Realistic, professional background replacement',
    icon: LockClosedIcon,
  },
  {
    name: 'Custom Insert Images',
    description: 'Show off your vehicles top value-building features, in a way where every customer will see it',
    icon: ServerIcon,
  },
  {
    name: '4 Hour Turnaround',
    description: 'Our team works 24 hours a day, 7 days a week, and can turn around most photo sets in 4 hours or less.',
    icon: ServerIcon,
  },
]

export function EditingManagement() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Editing Management</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                End to end editing on every single car
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
