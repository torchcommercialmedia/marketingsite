import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/Main/MerchandisingToolkit'
import { SecondaryFeatures } from '@/components/Main/ReconditioningIntro'
import { Testimonials } from '@/components/Testimonials'
import { LaunchForm } from '@/components/LaunchForm'
import { ProductMenu } from '@/components/ProductMenu'
import { ServiceHeader } from '@/components/ServiceCompany/ServiceHeader'
import { CustomerSupport } from '@/components/ServiceCompany/CustomerSupport'
import { FullBusinessManagement } from '@/components/ServiceCompany/FullBusinessManagement'
import { JobManagement } from '@/components/ServiceCompany/JobManagement'
import { CustomerManagement } from '@/components/ServiceCompany/CustomerManagement'

export default function Service() {
  return (
    <>
      <Head>
        <title>
          Chrome Lot - Next-Gen Vehicle Merchandising & Recon Management
        </title>
        <meta
          name="description"
          content="Vehicle photos, reconditioning and more."
        />
      </Head>
      <ProductMenu />
      <main>
        <ServiceHeader />
        <FullBusinessManagement />
        <JobManagement />
        {/* <CustomerManagement /> */}
        <CustomerSupport />
        <LaunchForm />
      </main>
      <Footer />
    </>
  )
}
