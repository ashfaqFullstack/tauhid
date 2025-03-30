import HeaderDashboard from "@/components/Dashboard/Header/HeaderDashbaord";
import StartSection from "@/components/Dashboard/Stats/StartSection";
import ByDifficulty from "@/components/Homepage/Bydifficulty/ByDifficulty";
import ByFamily from "@/components/Homepage/ByFamily/ByFamily";
import FlaggedQuestions from "@/components/Homepage/flagedQestion/flagedQuestion";
import PracticeExame from "@/components/Homepage/PracticeExam/practiveExame";

const page = () => {
    return (
        <div>
            <HeaderDashboard Title={"Saad"} />
            <StartSection />

            <div className="mt-10">
                <PracticeExame />
            </div>
            <div>
                <ByDifficulty />
            </div>
            <div className="mt-10">
                <ByFamily />
            </div>
            <div className="mt-10 mb-20">
                <FlaggedQuestions />
            </div>
        </div>
    )
}
export default page;