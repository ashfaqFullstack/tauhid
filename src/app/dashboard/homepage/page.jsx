 import HeaderDashboard from "@/components/Dashboard/Header/HeaderDashbaord";
import StartSection from "@/components/Dashboard/Stats/StartSection";
import PracticeExame from "@/components/Homepage/PracticeExam/practiveExame";

const page = () => {
    return (
        <div>
            <HeaderDashboard Title={"Saad"} />
            <StartSection />

            <div className="mt-10">
            <PracticeExame/>
            </div>
        </div>
    )
}
export default page;