import { PlayScore } from "@/components/PlayScore";
import { StepPage } from "../components/StepPage";

const Home = () => {
  return (
    <div className="flex flex-col h-[100%] justify-center items-center mt-[245px]">
      {/* <StepPage /> */}
      <PlayScore />
    </div>
  );
};
export default Home;
