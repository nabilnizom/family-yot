import Image from "next/image"

type Props = {
    width: number
    height: number
}

const Logo = ({ width, height } : Props) => {
    return <Image
    src="/Logo.png"
    width={width}
    height={height}
    alt="logo family day"/>
}

export default Logo