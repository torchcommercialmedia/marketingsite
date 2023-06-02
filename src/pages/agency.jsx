import Head from 'next/head'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Pricing } from '@/components/Pricing'
import { SecondaryFeatures } from '@/components/Main/ReconditioningIntro'
import { LaunchForm } from '@/components/LaunchForm'
import { ProductMenu } from '@/components/ProductMenu'
import { InventoryFeatureGrid } from '@/components/Reconditioning/InventoryFeatureGrid'
import { AgencyHeader } from '@/components/Agency/AgencyHeader'
import { RobustSupport } from '@/components/Agency/RobustSupport'
import { PhotographerManagement } from '@/components/Agency/PhotographerManagement'

export default function Agency() {
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
        <AgencyHeader />
        <PhotographerManagement />
        <RobustSupport />
        <LaunchForm />
      </main>
      <Footer />
    </>
  )
}
