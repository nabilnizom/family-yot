"use client";

import Link from "next/link"
import Logo from "../components/Logo"
import { Navigation } from "../components/Navigation"
import Form from "./Form"
import { useEffect, useMemo, useState } from "react";
import Input from "antd/es/input/Input";

export default function Borang () {
    const [password, setPassword] = useState<string>('')
    const [adminStatus, setAdminStatus] = useState<string | null>('')

    const isAdmin = useMemo(() => {
        return adminStatus === 'true'
    }, [])
    
    useEffect(() => {
        setAdminStatus(localStorage.getItem('admin'))
    }, [])

    useEffect(() => {
        if (password === '980312106514') {
            localStorage.setItem('admin', 'true')
            window.location.href = '/list'
        }
    },[password])
    
    return (
        <div className="bg-white w-screen h-screen flex flex-col">
        {isAdmin ? (
            <div>
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
            ) :(
            <div className={`w-1/2 mx-auto ${!isAdmin && 'my-auto'}`}>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>)}
        </div>
    )
}