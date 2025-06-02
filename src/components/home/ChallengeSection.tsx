import ContentSection from "./ContentSection"

export default function ChallengeSection() {
  const content = (
    <>
      <p className="text-slate-800 text-xl leading-relaxed">
        Modern technology companies have redefined "ownership" into conditional licensing. When you purchase
        a device, software, or digital product, you often can't:
      </p>
      <ul className="text-slate-700 text-lg leading-relaxed space-y-3">
        <li>• Repair it independently</li>
        <li>• Modify it for your needs</li>
        <li>• Choose your service provider</li>
        <li>• Access your own data</li>
        <li>• Use it beyond arbitrary restrictions</li>
      </ul>
    </>
  )

  return (
    <ContentSection
      title="Corporates"
      content={content}
      backgroundColor="bg-[#c5d9ed] text-slate-800"
      textColor="text-slate-800"
      accentColor="bg-[#8ab3d8]"
    />
  )
}