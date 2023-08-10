
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register Page',
  description: 'This is the register page of your app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>
          <div className="">
            {children}
          </div>
      </section>
  )
}
