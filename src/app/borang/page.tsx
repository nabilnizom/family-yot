import Link from "next/link"
import Logo from "../components/Logo"
import { Navigation } from "../components/Navigation"
import Form from "./Form"

export default function Borang () {
    return (
        <div className="bg-white w-screen h-screen flex flex-col">
            <div className="border-b flex justify-center py-2">
                <Link href="/">
                    <Logo width={60} height={40}/>
                </Link>
                <div className="my-auto">
                    <Navigation />
                </div>
            </div>
            <div className="mt-10">
                <Form />
            </div>
        </div>
    )
}