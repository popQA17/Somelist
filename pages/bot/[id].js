import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Template from "../../public/template"

export default Template(function BotPage(){
    const [bot, setbot] = useState('')
    const router = useRouter()
    useEffect(()=> {
        async function getbot() {
            console.log(router.query.id)
            await axios.get('https://api.somelist.tk/bot?user='+router.query.id).then((res)=>{
                console.log(res.data.result)
                    setbot(
                        <>
                        <div className="lg:flex items-center justify-between w-full">
                            <div className="flex flex-col lg:flex-row items-center gap-x-4">
                                <div className="flex-shrink-0 z-1 w-[8rem] h-[8rem] hidden lg:block">
                                <div
                                    style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px"}}
                                >
                                    <div style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}>
                                    <img
                                        style={{maxWidth: "100%", display: "block", margin: "0px", border: "medium none", padding: "0px"}}
                                        alt=""
                                        aria-hidden="true"
                                        role="presentation"
                                        src = {res.data.result.avatar}
                                    />
                                    </div>
                                    <img
                                    alt="Bot's avatar"
                                    decoding="async"
                                    src={res.data.result.avatar}
                                    className="rounded-lg lg:rounded-full transition-all duration-150"
                                    style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "medium none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}
                                    />
                                </div>
                                </div>
                        <div className="flex-shrink-0 z-1 block w-[16rem] h-[16rem] mb-5 lg:hidden">
                                <div
                                    style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px"}}
                                >
                                    <div style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}>
                                    <img
                                        style={{maxWidth: "100%", display: "block", margin: "0px", border: "medium none", padding: "0px"}}
                                        alt=""
                                        aria-hidden="true"
                                        role="presentation"
                                    />
                                    </div>
                                    <img
                                    alt="Bot's avatar"
                                    decoding="async"
                                    src={res.data.result.avatar}
                                    className="rounded-lg lg:rounded-full transition-all duration-150"
                                    style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "medium none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}
                                    
                                    />
                                </div>
                                </div>
                                <div
                                className="flex justify-center flex-col text-center mb-2 lg:mb-0 lg:text-left items-center lg:items-start lg:justify-start w-full"
                                >
                                <p
                                    className="flex items-center text-4xl font-medium text-black dark:text-white"
                                >
                                    {res.data.result.name}
                                </p>
                                <div
                                    className="flex items-center w-4/4 line-clamp-2 text-zinc-500 font-medium"
                                >
                                    <p className="text-base">
                                    {res.data.result.shortdesc}
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0 lg:ml-56 flex items-center flex-col">
                                <button
                                className="flex justify-between items-center w-full lg:w-48 bg-violet-600/40 hover:bg-violet-600/70 transition-all duration-200 py-2 mt-2 px-6 text-lg rounded-lg text-black dark:text-white shadow-lg shadow-violet-600/10"
                                >
                                <i className="fab fa-discord left-0 mr-1"></i>Invite</button
                                ><button
                                className="flex justify-between items-center w-full lg:w-48 bg-zinc-600/20 hover:bg-zinc-600/40 transition-all duration-200 py-2 mt-2 px-6 text-lg rounded-lg text-black dark:text-white shadow-lg shadow-zinc-600/10"
                                >
                                <i className="fa fa-caret-up left-0 mr-1"></i>Vote ({res.data.result.votes})
                                </button>
                            </div>
                            </div>
                            <div
                                className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-y-0 lg:gap-x-4 mt-20 lg:mt-28"
                                >
                                <div className="order-last lg:order-first col-span-9">
                                    <div
                                    className="bg-zinc-500/20 dark:bg-zinc-700/5 border border-zinc-600/10 text-black dark:text-zinc-300 transition-all duration-200 rounded-lg p-5"
                                    >
                                    <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: res.data.result.longdesc }} style={{overflowWrap: 'break-word'}}>

                                    </div>
                                    </div>
                                </div>
                                <div className="col-span-3 w-full">
                                    <div
                                    className="w-full bg-zinc-500/20 dark:bg-zinc-700/5 border border-zinc-600/10 text-black dark:text-zinc-300 transition-all duration-200 rounded-lg p-5"
                                    >
                                    <div>
                                        <h1 className="text-2xl mb-3">
                                        <i className="fas fa-info-circle text-violet-500 mr-2"></i>Details
                                        </h1>
                                        <div className="flex items-center w-full">
                                        <p className="text-lg">Prefix</p>
                                        <span
                                            className="bg-zinc-600/20 px-2 py-1 rounded-lg text-black dark:text-zinc-400 text-sm ml-2"
                                            >!</span
                                        >
                                        </div>
                                        <div className="flex items-center w-full mt-1">
                                        <p className="text-lg">Monthly Votes</p>
                                        <span
                                            className="bg-zinc-600/20 px-2 py-1 rounded-lg text-black dark:text-zinc-400 text-sm ml-2"
                                            >{res.data.result.votes}</span
                                        >
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <h1 className="text-2xl mb-3">
                                        <i className="fas fa-users text-violet-500 mr-2"></i>Authors
                                        </h1>
                                        <div className="flex flex-col items-center w-full gap-x-2 gap-y-2">
                                        <span
                                            className="flex w-full items-center bg-zinc-600/20 hover:bg-zinc-600/30 px-2 cursor-pointer transition-all duration-150 py-1 rounded-lg text-black dark:text-zinc-400 text-sm"
                                            ><div className="flex-shrink-0 w-[3rem] h-[3rem]">
                                            <div
                                                style={{display: "inline-block", maxWidth: "100%", overflow: "hidden", position: "relative", boxSizing: "border-box", margin: "0px"}}
                                                
                                            >
                                                <div
                                                style={{boxSizing: "border-box", display: "block", maxWidth: "100%"}}
                                                >
                                                <img
                                                    style={{maxWidth: "100%", display: "block", margin: "0px", border: "medium none", padding: "0px"}}
                                                    alt=""
                                                    aria-hidden="true"
                                                    role="presentation"
                                                />
                                                </div>
                                                <img
                                                alt="User's avatar"
                                                decoding="async"
                                                className="rounded-full"
                                                style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "medium none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}
                                                
                                                />
                                            </div>
                                            </div>
                                            <p className="text-lg ml-3">HamsterButİnLove</p></span
                                        >
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <h1 className="text-2xl mb-3">
                                        <i className="fas fa-tag text-violet-500 mr-2"></i>Tags
                                        </h1>
                                        <div
                                        className="flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2"
                                        >
                                        <span
                                            className="flex items-center bg-zinc-600/20 hover:bg-zinc-600/30 px-2 cursor-pointer transition-all duration-150 py-1 rounded-lg text-black dark:text-zinc-400 text-sm"
                                            >Economy</span
                                        ><span
                                            className="flex items-center bg-zinc-600/20 hover:bg-zinc-600/30 px-2 cursor-pointer transition-all duration-150 py-1 rounded-lg text-black dark:text-zinc-400 text-sm"
                                            >Fun</span
                                        >
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <h1 className="text-2xl mb-3">
                                        <i className="fas fa-external-link text-violet-500 mr-2"></i>Links
                                        </h1>
                                        <div
                                        className="flex flex-row flex-wrap items-center w-full gap-x-2 gap-y-2"
                                        >
                                        <a
                                            target="_blank"
                                            href="https://decro.tk"
                                            className="w-full text-black dark:text-white group"
                                            ><div className="flex items-center">
                                            <div
                                                className="rounded-l-lg text-center py-2 bg-zinc-600/30 transition-all duration-150 group-hover:bg-zinc-600/40 px-4 w-14"
                                            >
                                                <i className="fas fa-link"></i>
                                            </div>
                                            <div
                                                className="rounded-r-lg text-center py-2 bg-zinc-600/20 transition-all duration-150 group-hover:bg-zinc-600/30 px-2 w-full"
                                            >
                                                <p>decro.tk</p>
                                            </div>
                                            <div></div></div></a
                                        ><a
                                            target="_blank"
                                            href="https://discord.gg/PTAgf9yGkv"
                                            className="w-full text-black dark:text-white group"
                                            ><div className="flex items-center">
                                            <div
                                                className="rounded-l-lg text-center py-2 bg-zinc-600/30 transition-all duration-150 group-hover:bg-zinc-600/40 px-4 w-14"
                                            >
                                                <i className="fab fa-discord"></i>
                                            </div>
                                            <div
                                                className="rounded-r-lg text-center py-2 bg-zinc-600/20 transition-all duration-150 group-hover:bg-zinc-600/30 px-2 w-full"
                                            >
                                                <p>Support Server</p>
                                            </div>
                                            <div></div></div></a
                                        ><a
                                            target="_blank"
                                            className="cursor-pointer w-full text-black dark:text-white group"
                                            ><div className="flex items-center">
                                            <div
                                                className="rounded-l-lg text-center py-2 bg-red-600/30 transition-all duration-150 group-hover:bg-red-600/40 px-4 w-14"
                                            >
                                                <i className="fa fa-bug"></i>
                                            </div>
                                            <div
                                                className="rounded-r-lg text-center py-2 bg-red-600/20 transition-all duration-150 group-hover:bg-red-600/30 px-2 w-full"
                                            >
                                                <p>Report</p>
                                            </div>
                                            <div></div></div>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    </>
                    )
                })
        }
        getbot()
    }, [])
    return(
        <div className="p-5 lg:p-10 py-[10rem] lg:py-[12rem] rounded-lg min-h-screen">
            {bot}

        </div>
    )
})