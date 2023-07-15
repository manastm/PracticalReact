import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import InnovateSponsor from "@/assets/YCLogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        {/* Image and Main Header */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* Main Header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Heading */}
                <div className="md: -mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-triventtext">
                            <img alt="home-page-text" src={HomePageText}/>
                        </div>
                    </div>

                    <p className="mt-8 text-sm ml-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus vitae massa id auctor. Maecenas dignissim mollis arcu quis venenatis. Nunc fermentum sit amet lectus quis gravida. 
                    </p>
                </div>
                
                {/* Actions */}

                <div className="mt-8 ml-2 flex items-center gap-8 md:justify-start">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-400"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>

            {/* image */}
            <div className="flex basis-3/5 justify-center md:z-10">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img alt="redbull-sponsor" src={InnovateSponsor} />
                        <img alt="redbull-sponsor" src={InnovateSponsor} />
                        <img alt="redbull-sponsor" src={InnovateSponsor} />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home;