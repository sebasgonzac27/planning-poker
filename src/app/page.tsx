import { redirect } from "next/navigation"

export default function Home() {
    redirect("/party/create")
    return (<></>)
}