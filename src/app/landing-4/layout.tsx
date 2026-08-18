import WhatsAppButton from '@/components/WhatsAppButton'
import InstagramButton from '@/components/InstagramButton'

export default function Landing4Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <InstagramButton />
      <WhatsAppButton />
    </>
  )
}
