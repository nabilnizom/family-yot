import Link from "next/link";
import Table from "./Table";
import Logo from "../components/Logo";
import { Navigation } from "../components/Navigation";

export default function List() {
    return (
        <div className="bg-white w-screen flex flex-col">
                <div className="border-b flex justify-center py-2">
                    <Link href="/">
                        <Logo width={60} height={40}/>
                    </Link>
                    <div className="my-auto">
                        <Navigation />
                    </div>
                </div>
            <div className="mt-10 w-1/2 mx-auto">
                <Table />
            </div>
        </div>
    )
}