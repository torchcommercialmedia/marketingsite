import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, TrophyIcon, ChatBubbleBottomCenterTextIcon, LifebuoyIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Photographer Certification',
    description:
      'Put your photographers through our professional training course with with certificate.  Requires no previous photography experience, it takes only two days, and we can help you customize it to your standards',
    icon: TrophyIcon,
  },
  {
    name: 'QA Feedback on Every Car',
    description: 'Every photographer is scored on every car, for mistakes like bad photo framing, floormats not straightened, missing photos, and more.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Professional Training',
    description: 'Unlimited coaching and training from our expert photographers, to keep your photography team on track, and working well.',
    icon: LifebuoyIcon,
  },
]

export function PhotographerManagement() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Photographer Management</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our professional photography team will oversee your photo program and photographers, and will help them stay on track, and successful.
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
