import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { LaunchForm } from '@/components/LaunchForm'
import { ProductMenu } from '@/components/ProductMenu'
import { ServiceCompanies } from '@/components/Main/ServiceCompanies'


export default function Home() {
  return (
    <>
      <Head>
        <title>Chrome Lot - Next-Gen Vehicle Merchandising & Recon Management</title>
        <meta
          name="description"
          content="Vehicle photos, reconditioning and more."
        />
      </Head>
      <ProductMenu />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <ServiceCompanies />
        <Testimonials />
        <Faqs />
        <Pricing />
        <LaunchForm />
      </main>
      <Footer />
    </>
  )
}
