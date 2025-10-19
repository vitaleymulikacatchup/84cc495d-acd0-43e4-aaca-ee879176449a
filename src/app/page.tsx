"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { TrendingUp, CheckCircle } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/8467963/pexels-photo-8467963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hair care products on a bed of hair and flowers, symbolizing luxury and beauty."},
  {"id":"about-image","url":"https://images.pexels.com/photos/4783333/pexels-photo-4783333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A hairstylist applies hairspray to a senior woman's new hairstyle in a modern salon."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/8834110/pexels-photo-8834110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hair salon receptionist smiling and waving in a modern interior setting."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/6954012/pexels-photo-6954012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Delighted young woman smiling and looking in round mirror after applying makeup by African American female visagiste in beauty salon"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/7755511/pexels-photo-7755511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman selecting hair color samples in a salon, showcasing shades of brown and blonde."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/7755511/pexels-photo-7755511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman selecting hair color samples in a salon, showcasing shades of brown and blonde."}
];

export default function Page() {
  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleApple 
            navItems={[{name:"Home",id:"home"},{name:"About",id:"about"},{name:"Services",id:"services"},{name:"Contact",id:"contact"}]} 
            brandName="Xeven"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit 
            title="Discover the Art of Hair Styling"
            description="Transform your look with Xeven's expert styling services."
            imageSrc="https://images.pexels.com/photos/8467963/pexels-photo-8467963.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imagePosition="left"
            buttons={[{text:"Book Now",href:"contact"},{text:"Learn More",href:"about"}]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout 
            title="About Xeven"
            description="Passionate about creating beautiful hairstyles for every client."
            bulletPoints={[
              {title:"Experience",description:"Years of expertise in modern styling.",icon:TrendingUp},
              {title:"Quality",description:"Using only the finest products for your hair.",icon:CheckCircle}
            ]}
            imageSrc="https://images.pexels.com/photos/4783333/pexels-photo-4783333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne 
            title="What Our Clients Say"
            description="Read some of the wonderful feedback from our clients."
            testimonials={[
              {id:"1",name:"Sarah Johnson",role:"Freelancer",company:"Self-employed",rating:5,imageSrc:"https://images.pexels.com/photos/8834110/pexels-photo-8834110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
              {id:"2",name:"Michael Brand",role:"Photographer",company:"Creative Co.",rating:5,imageSrc:"https://images.pexels.com/photos/6954012/pexels-photo-6954012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
              {id:"3",name:"Emily Rodriguez",role:"Blogger",company:"Fashion Hub",rating:5,imageSrc:"https://images.pexels.com/photos/7755511/pexels-photo-7755511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
              {id:"4",name:"David Kim",role:"Designer",company:"Design Studio",rating:5,imageSrc:"https://images.pexels.com/photos/7755511/pexels-photo-7755511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter 
            tag="Newsletter"
            title="Stay Connected with Xeven"
            description="Subscribe to receive the latest updates and styling tips."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe anytime."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis 
            columns={[
              {items:[{label:"Home",href:"home"},{label:"About",href:"about"}]},
              {items:[{label:"Services",href:"services"},{label:"Contact",href:"contact"}]}
            ]}
            logoText="Xeven"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}