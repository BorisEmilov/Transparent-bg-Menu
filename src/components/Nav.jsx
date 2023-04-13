import React, { useEffect, useState } from 'react'
import crypto from '../assets/cripto2.jpg'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { Divider, IconButton, TextField, Tooltip } from '@mui/material'
import { BsBook, BsBoxArrowInDown, BsChat, BsFillGearFill } from 'react-icons/bs'
import { AiFillEye, AiFillFacebook, AiFillGithub, AiFillRedditCircle, AiOutlineAreaChart, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineWallet, AiOutlinePlus } from 'react-icons/ai'
import { FaRegMoneyBillAlt, FaTelegram, FaViber } from 'react-icons/fa'
import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines'



const Nav = () => {
    const [expand, setExpand] = useState(false)
    const [coin, setCoin] = useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=true&locale=en'

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoin(response.data)
        })
    }, [url])

    const handleExpand = () => {
        setExpand(!expand)
    }

    return (
        <>
            {expand ?
                <div className='absolute w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-transparent z-10 '>
                    <div className='h-[45px] w-[90%] flex flex-row items-center justify-around max-w-lg p-2 mt-4'>
                        <input type='text' placeholder='Search...' className='w-[90%] h-[30px] rounded-xl text-center' />
                        <HiOutlineMagnifyingGlass color='white' size={25} cursor='pointer' />
                    </div>
                    <div className='h-[95%] w-[100%] flex flex-col items-center justify-around p-2'>
                        <div className='h-20 max-w-lg w-[95%] bg-[#e0e1dd] rounded-xl flex flex-row items-center justify-around'>
                            <div className='h-[100%] w-[100%] flex flex-col items-center justify-between'>
                                <div className='w-[100%] h-[100%] flex items-center justify-center'>
                                    <h3><b>$00.00</b></h3>
                                    <Tooltip placement='top' title='deposit'>
                                        <IconButton sx={{ ml: 1 }}>
                                            <FaRegMoneyBillAlt size={19} color='black' />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip placement='top' title='withdrawl'>
                                        <IconButton sx={{ ml: 1 }}>
                                            <BsBoxArrowInDown size={19} color='black' />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                                <Divider sx={{ width: '90%' }} />
                                <div className='w-[100%] h-[100%] flex items-center justify-center'>
                                    <h3 className='mr-1'>Oppen Trades: 0</h3>
                                    <Tooltip placement='bottom' title='view my positions'>
                                        <IconButton>
                                            <AiFillEye size={19} color='black' />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        <div className='h-20 max-w-lg w-[95%] bg-[#8d99ae] opacity-85 rounded-xl flex flex-raw items-center justify-around'>
                            <Tooltip title='my wallet' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><AiOutlineWallet color='white' size={35} /></IconButton></Tooltip>
                            <Tooltip title='assets' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><AiOutlineAreaChart color='white' size={35} /></IconButton></Tooltip>
                            <Tooltip title='chats' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><BsChat color='white' size={35} /></IconButton></Tooltip>
                            <Tooltip title='courses' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><BsBook color='white' size={35} /></IconButton></Tooltip>
                            <Tooltip title='settings' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><BsFillGearFill color='white' size={35} /></IconButton></Tooltip>
                        </div>
                        <div className='h-[300px] max-w-lg w-[95%] grid grid-rows-3 grid-cols-3 gap-x-[5px] gap-y-[5px] items-center'>
                            {
                                coin.map((elem) => (
                                    <div className='h-[95%] w-[95%] flex flex-col items-center justify-center bg-[#e0e1dd] rounded-xl cursor-pointer'>
                                        <div className='w-[100%] flex flex-row items-center justify-around mt-[5px]'>
                                            <p><b>{elem.symbol.toUpperCase()}</b></p>
                                            <img src={elem.image} alt='' className='h-[20px]' />
                                        </div>
                                        <div className='w-[100%] h-[100%] flex flex-col items-center justify-end'>
                                            <Sparklines data={elem.sparkline_in_7d.price}>
                                                <SparklinesLine color='blue' />
                                            </Sparklines>
                                        </div>
                                    </div>
                                ))
                            }
                            <Tooltip placement='bottom' title='Add Asset'>
                            <div className='w-[70px] h-[70px] rounded-[50%] bg-[#e0e1dd] flex items-center justify-center cursor-pointer'>
                                <AiOutlinePlus size={30}/>
                            </div>
                            </Tooltip>
                        </div>
                        <div className='h-16 max-w-lg w-[95%] bg-[#8d99ae] opacity-85 rounded-xl flex flex-raw items-center justify-around'>
                            <Tooltip title='chats' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><AiOutlineInstagram color='white' size={30} /></IconButton></Tooltip>
                            <Tooltip title='chats' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><AiFillFacebook color='white' size={30} /></IconButton></Tooltip>
                            <Tooltip title='chats' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><FaTelegram color='white' size={30} /></IconButton></Tooltip>
                            <Tooltip title='chats' placement='bottom'><IconButton sx={{ backgroundColor: '#2b2d42' }}><AiFillRedditCircle color='white' size={30} /></IconButton></Tooltip>
                        </div>
                    </div>
                    <div onClick={handleExpand} className='h-[30px] w-[300px] bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row items-center justify-center rounded-xl mb-3 cursor-pointer'>
                        <p className='text-white'>shrink nav</p>
                    </div>
                </div>
                :
                <div className='fixed w-[100%] h-[40px] flex flex-row items-center justify-center z-10'>
                    <div onClick={handleExpand} className='h-[30px] w-[300px] bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row items-center justify-center rounded-xl cursor-pointer'>
                        <p className='text-white'>expand nav</p>
                    </div>
                </div>
            }
            <div className={expand ? "relative h-[100vh] w-[100vw] flex flex-col items-center justify-start overflow-hidden blur-sm" : "relative h-[100vh] w-[100vw] flex flex-col items-center justify-start overflow-hidden"}>
                <img src={crypto} alt="" className="h-[100%] w-[100%] object-cover" />
            </div>
        </>
    )
}

export default Nav