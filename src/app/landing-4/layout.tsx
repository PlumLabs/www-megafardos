import WhatsAppButton from '@/components/WhatsAppButton'

export default function Landing4Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <WhatsAppButton />
    </>
  )
}
