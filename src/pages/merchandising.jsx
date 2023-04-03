import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { SecondaryFeatures } from '@/components/Main/ReconditioningIntro'
import { Testimonials } from '@/components/Testimonials'
import { LaunchForm } from '@/components/LaunchForm'
import { ProductMenu } from '@/components/ProductMenu'
import { PhotographerManagement } from '@/components/Merchandising/PhotographerManagement'
import { EditingManagement } from '@/components/Merchandising/EditingManagement'
import { RobustSupport } from '@/components/Merchandising/RobustSupport'
import { Gallery } from '@/components/Merchandising/Gallery'

export default function Products() {
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
        <PhotographerManagement />
        <EditingManagement />
        <Gallery />
        <RobustSupport />
        <Faqs />
        <Pricing />
        <LaunchForm />
      </main>
      <Footer />
    </>
  )
}
