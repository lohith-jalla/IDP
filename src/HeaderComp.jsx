import {PathAtom} from './PathAtom'
import {useRecoilState} from 'recoil'

export default function HeaderComp(){
    const [path,setpath] = useRecoilState(PathAtom)

    return (<div className={`fixed top-0 w-full z-50`}>

        <div className="bg-black flex justify-between items-center p-5 h-20">
            <p className='text-3xl text-white'>Best Deal</p>
            <div className="">
                <ul className='text-xl pr-10 text-white flex justify-center items-center gap-10'>
                    <li className='cursor-pointer'><p><button onClick={()=>{
                        setpath('/HomePage')
                    }}>Home</button></p></li>
                    <li className='cursor-pointer'><p><button onClick={()=>{
                        setpath('/FoodPage')
                    }}>Food</button></p></li>
                    <li className='cursor-pointer'><p><button onClick={()=>{
                        setpath('/RidesPage')
                    }}>Rides</button></p></li>
                    <li className='cursor-pointer'><p><button onClick={()=>{
                        setpath('/AboutPage')
                    }}>About</button></p></li>
                </ul>
            </div>
        </div>
    </div>)
}