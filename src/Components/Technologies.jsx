
import { RiReactjsLine } from "react-icons/ri"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"; 
import { FaChartBar } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-700 pb-24">
            <h1 className="my-20 text-center text-4xl">
                Technologies
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <RiReactjsLine className="text-7xl text-gradient text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <TbBrandNextjs className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <SiMongodb className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <DiMysql className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <DiPhp className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <FaJava className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <FaNodeJs className="text-7xl text-cyan-400"/>
                </div>

                <div className="rounded-2xl border-4 border-neutral-100 p-4">
                    <FaChartBar className="text-7xl text-cyan-400"/>
                </div>

            </div>
        </div>
    );
}

export default Technologies
