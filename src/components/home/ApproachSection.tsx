import ContentSection from "./ContentSection"

export default function ApproachSection() {
  const content = (
    <>
      <p className="text-white text-xl leading-relaxed">
        FULU Foundation tackles this through strategic collaboration:
      </p>
      <div className="text-[#a8c5d6] text-lg leading-relaxed space-y-4">
        <p>
          <strong>Legal Advocacy</strong> - Supporting constitutional challenges to overly restrictive laws
        </p>
        <p>
          <strong>Policy Research</strong> - Commissioning studies from leading academic institutions
        </p>
        <p>
          <strong>Coalition Building</strong> - Uniting diverse stakeholders around ownership rights
        </p>
        <p>
          <strong>Public Education</strong> - Making complex tech policy accessible to everyone
        </p>
        <p>
          <strong>Grassroots Support</strong> - Empowering local communities and businesses
        </p>
      </div>
    </>
  )

  return (
    <ContentSection
      title="Foundations & Family Offices"
      content={content}
      backgroundColor="bg-[#0a2e43] text-white"
      textColor="text-white"
      accentColor="bg-[#2a5e7b]"
    />
  )
}