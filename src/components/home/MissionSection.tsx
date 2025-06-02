import ContentSection from "./ContentSection"

export default function MissionSection() {
  const content = (
    <>
      <p className="text-white text-xl leading-relaxed">
        FULU Foundation exists to restore and protect genuine ownership rights in the digital age. We're
        building a future where users have control over their devices, software, and digital tools.
      </p>
      <p className="text-[#b3e6d5] text-lg leading-relaxed">
        We believe people should have the ability to program their computers and hardware as they please.
        We're at a critical juncture where the decisions made today about digital rights will determine
        whether future generations inherit a world of genuine ownership or permanent dependency on corporate
        gatekeepers.
      </p>
    </>
  )

  return (
    <ContentSection
      title="Ventures & Investors"
      content={content}
      backgroundColor="bg-[#006751] text-white"
      textColor="text-white"
      accentColor="bg-[#00a37a]"
    />
  )
}