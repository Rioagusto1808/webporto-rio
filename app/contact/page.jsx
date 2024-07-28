import Form from "@/components/Form"
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react"



const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text dan ilustrasi */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
            Rio Agusto
          </div>
          <h1 className="h1 max-w-md mb-8">Let's Work</h1>
          </div>
          {/* ilustrasi */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat "></div>
        </div>
        {/* text dan form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col  mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"/>
              <div>rioagustor18@gmail.com</div>
            </div>
            {/* adress */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary"/>
              <div>Lampung, Indonesia.</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary"/>
              <div>+62 895 3211 25978</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPage