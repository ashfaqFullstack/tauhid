import Header from "@/components/Dashboard/Header/Header";

export default function layout({ children }) {
    return (
        <div className="mx-[2%] md:mx-[5%] xl:mx-[8%] mt-[20px] md:mt-[30px] lg:mt-[60px]" >
            <Header Title={"Saad"} />
            {children}
        </div>
    );
}
