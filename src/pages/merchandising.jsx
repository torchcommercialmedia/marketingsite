import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { LaunchForm } from '@/components/LaunchForm'
import { ProductMenu } from '@/components/ProductMenu'
import { PhotographerManagement } from '@/components/Agency/PhotographerManagement'
import { PhotographyToolkit } from '@/components/Merchandising/PhotographyToolkit'
import { Gallery } from '@/components/Merchandising/Gallery'
import { MerchandisingHeader } from '@/components/Merchandising/MerchandisingHeader'
import ImageProcessing from '@/components/Merchandising/ImageProcessing'
import { OtherTools } from '@/components/Merchandising/OtherTools'

export default function Products() {
  return (
    <>
      <Head>
        <title>Chrome Lot Merchadising Tools</title>
        <meta
          name="description"
          content="Vehicle photos, reconditioning and more."
        />
      </Head>
      <ProductMenu />
      <main>
        <MerchandisingHeader />
        <PhotographyToolkit />
        <ImageProcessing />
        <OtherTools />
        <LaunchForm />
      </main>
      <Footer />
    </>
  )
}
