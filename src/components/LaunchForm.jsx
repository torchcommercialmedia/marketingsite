export function LaunchForm() {
    return (
      <div className="bg-indigo-700 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Get notified as soon as we launch.</h2>{' '}
            <p className="inline sm:block lg:inline xl:block text-gray-300 font-semibold">Get on the waitlist.</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Link href="/register"
                className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get on the Waitlist
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }


