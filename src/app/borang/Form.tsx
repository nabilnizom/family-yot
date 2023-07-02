'use client';
import { Cascader } from "antd"
import { useEffect, useMemo, useState } from "react";

type Option = {
    value: string
    label: string
    children?: Option[]
}

export default function Form () {
    const [amount, setAmount] = useState(1)
    const [formField, setFormField] = useState<any[]>([])
    const [listType, setListType] = useState<any>({})
    const [newBaju, setNewBaju] = useState<any>({}) 
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        setListType({...listType, ...newBaju})
    }, [newBaju])

    useEffect(() => {
        if (formField.length === amount) {
            return
        }
        let newFormField: any[] = []
        if (formField.length) {
            newFormField = [...formField]
            if (formField.length > amount) {
                while (newFormField.length !== amount) {
                    newFormField.pop()
                }
                setFormField(newFormField)
                return
            }
        }
        const field = (
                <div>
                    <div className="mb-4">
                        <p className="text-gray-700">Nama</p>  
                        <input type="text" id={`nama-${amount}`} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"></input>
                    </div>
                    <div>
                        <p className="text-gray-700">Baju</p>
                        <Cascader onChange={(e: any) => {
                                const key = `baju-${amount}`
                                const obj = {
                                    [key]: {
                                        type: e[0],
                                        size: e[1]
                                    }
                                }
                                setNewBaju(obj)
                            }} options={options}/>
                    </div>
                </div>
        )
        newFormField.push(field)
        setFormField(newFormField)
    },[amount])

    const kidsSize: Option[] = [
        {
            value: '26',
            label: '26'
        },
        {
            value: '28',
            label: '28'
        },
        {
            value: '30',
            label: '30'
        },
        {
            value: '32',
            label: '32'
        }
    ]

    const size: Option[] = [
        {
            value: '2xs',
            label: 'XXS',
        },
        {
            value: 'xs',
            label: 'XS',
        },
        {
            value: 's',
            label: 'S',
        },
        {
            value: 'm',
            label: 'M',
        },
        {
            value: 'l',
            label: 'L'
        },
        {
            value: 'xl',
            label: 'XL'
        },
        {
            value: '2xl',
            label: 'XXL'
        },
        {
            value: '3xl',
            label: '3XL'
        },
        {
            value: '5xl',
            label: '5XL'
        }
    ]
    const options: Option[] = [
        {
            value: 'pendek',
            label: 'Pendek',
            children: size
        },
        {
            value: 'panjang',
            label: 'Panjang',
            children: size
        },
        {
            value: 'kids',
            label: 'Kanak-kanak',
            children: kidsSize
        }
    ]

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        const listBaju = []
        for (let i = 0; i < amount; i++) {
            const keyNama = `nama-${i + 1}`
            const keyBaju = `baju-${i + 1}`
            const obj = {
                nama: event.target[keyNama].value,
                baju: listType[keyBaju]
            }
            listBaju.push(obj)
        }

        const data = {
            wakil: event.target.wakil.value,
            listBaju: listBaju
        }

        const JSONData = JSON.stringify(data)
        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONData
        }

        const res = await fetch('/api/borang', opt)
        if (res.status === 200) {
            setMessage(`Terima kasih ${data.wakil}.`)
        }
    }
    return (
        <>
        <section className="max-w-4xl min-w-1/2 p-6 mx-4 md:mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Borang Tempahan Baju</h2>
        <br/>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="text-gray-700" htmlFor="wakil">Wakil</label>
                    <input type="text" id="wakil" name="wakil" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"></input>
                </div>
                {formField.map((field, index) => {
                    return (
                        <div key={index}>
                            {field}
                        </div>
                    )
                })}
            </div>
    
            <div className="flex justify-end mt-6">
                <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
                <div className="flex gap-2">
                    <button onClick={() => {
                        setAmount(amount + 1)
                        }}
                        className="px-3 py-2.5 border border-neutral-800 leading-5 text-neutral-700 transition-colors duration-300 transform rounded-md hover:text-green-600 hover:border-green-600">
                        Tambah
                    </button>
                    <button onClick={() => setAmount((amount - 1) || 1)} className="px-3 py-2.5 border border-neutral-800 leading-5 text-neutral-700 transition-colors duration-300 transform rounded-md hover:text-red-600 hover:border-red-600">
                        Delete
                    </button>
                </div>
        </section>

                <br/>
        <div className="w-full flex justify-center">
            <p className="text-neutral-600">
                {message}
            </p>
        </div>
        </>
    )
}