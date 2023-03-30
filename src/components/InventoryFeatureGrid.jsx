import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'Custom Widget Dashboard',
      description: 'Customize your dashboard, track time to market, and other stats',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Custom Workflows',
      description: 'Set custom steps in your vehicle inspection and processing ',
      icon: LockClosedIcon,
    },
    {
      name: 'Notifications',
      description: 'Send and recieve notifications when you assign tasks, and when tasks are completed',
      icon: ArrowPathIcon,
    },
    {
      name: 'Get Quotes',
      description: 'Send out issues to third party repair providers with public links to get quick quotes on damage',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Custom Condition Report Builder',
      description: 'Utilize conditional logic, and more to set up custom processes for your store',
      icon: CogIcon,
    },
    {
      name: 'Simple Mobile App',
      description: 'Run condition reports, capture vehicle and damage pictures, and more',
      icon: ServerIcon,
    },
  ]
  
  export function InventoryFeatureGrid() {
    return (
      <div className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Comprehensive Features to Manage Your Inventory Prep
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Everything you need, and nothing you don't.
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                          <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  