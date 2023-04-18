import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function FirstTips() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-indigo-600 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get on the Waitlist Today
          </h2>
          <p className="mt-4 pb-6 text-lg text-gray-300">
            Find out more, get on the waitlist
          </p>
          <Link
            href="/register"
            className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get on the Waitlist
          </Link>
        </div>
      </Container>
    </section>
  )
}
