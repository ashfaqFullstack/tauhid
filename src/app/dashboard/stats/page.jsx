import HeaderDashboard from '@/components/Dashboard/Header/HeaderDashbaord'
import StartSection from '@/components/Dashboard/Stats/StartSection'

const page = () => {
    return (
        <div>
            <HeaderDashboard Title={"Saad"} />
            <div className='relative' >
                <StartSection />
            </div>
        </div>
    )
}

export default page