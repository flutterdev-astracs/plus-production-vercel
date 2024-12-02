import dynamic from "next/dynamic";
import originalLogo from "@/assets/originalLogo.png";
import Loading from "@/components/Loading";


// Dynamic imports with loaders
const HomeNavbar = dynamic(() => import("@/components/NavBar/HomeNavbar"), {
  loading: () => <Loading />,
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <Loading />,
});

const PlanEvent = dynamic(() => import("../Home/sections/PlanEvent"), {
  loading: () => <Loading />,
});

const ProGrade = dynamic(() => import("./sections/ProGrade"), {
  loading: () => <Loading />,
});

const StudioForm = dynamic(() => import("./sections/StudioForm"), {
  loading: () => <Loading />,
});

const Appointments = dynamic(() => import("./sections/Appointments"), {
  loading: () => <Loading />,
});

const StudioPage = () => {
  return (
    <>
      {/* NavBar */}
      <HomeNavbar
        scrollColor={"bg-white"}
        bgColor={"bg-white"}
        textColor={"plum"}
        logo={originalLogo}
        isBorderRight={true}
      />

      {/* Below Navbar */}
      <div className="bg-darkBlue p-6 text-white mt-24">
        <div className="width-container ">
          <ul className="flex justify-center text-nowrap overflow-x-auto custom-scrollbar">
            <li className="border-r border-r-white px-6">VOCAL RECORDING</li>
            <li className="border-r border-r-white px-6">PODCASTS</li>
            <li className="border-r border-r-white px-6">VOICEOVERS</li>
            <li className="border-r border-r-white px-6">AUDIOBOOKS</li>
            <li className="px-6">CONTENT CREATION</li>
          </ul>
        </div>
      </div>

      <Appointments />

      {/* Studio Form */}
      <StudioForm />

      {/* Pro Grade Section */}
      <ProGrade />
      <PlanEvent />

      <Footer />
    </>
  );
};

export default StudioPage;
