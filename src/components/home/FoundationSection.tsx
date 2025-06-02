import ContentSection from "./ContentSection"

export default function FoundationSection() {
  const content = (
    <>
      <p className="text-white text-xl leading-relaxed">
        Fighting the Anti-Ownership Agenda is our core mission. We work with consumers and advocacy groups
        to challenge the creeping anti-ownership agenda by exposing licensing overreach and promoting true
        ownership alternatives.
      </p>
      <p className="text-[#a8c5d6] text-lg leading-relaxed">
        Your car reports back to the manufacturer. Your favorite movie vanishes from your digital library.
        Your smart device stops working because someone flipped a switch in the cloud. This isn't progress.
        It's control. We believe that if you bought it, you should own it, plain and simple.
      </p>
    </>
  )

  return (
    <ContentSection
      title="Our Mission"
      content={content}
      backgroundColor="bg-[#2a5e7b] text-white"
      textColor="text-white"
      accentColor="bg-[#5a8ca8]"
    />
  )
}
