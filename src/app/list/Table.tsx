"use client";

import Card from "antd/es/card/Card";
import { useEffect, useState } from "react";

export default function Table () {
    const [content, setContent] = useState<any>([])
    const getData = async () => {
        const opt = {
            method: 'GET'
        }
        
        const res = await fetch('/api/borang', opt)
        const data = await res.json()
        setContent( data.map((item: any) => {
            return (
                <Card title={item.wakil}>
                {
                    item.listBaju.map((lb: any) => {
                        if (!lb.baju || !lb.nama) {
                            return <></>
                        }
                        return (
                            <p>{lb.nama}</p>
                            )
                        })
                    }
                    </Card>
                    )
                }))
            }
            
            useEffect(() => {
                getData()
            }, [])
            
            return (
                <div className="grid grid-cols-3 gap-2">
                    {content}
                </div>
                )
        }