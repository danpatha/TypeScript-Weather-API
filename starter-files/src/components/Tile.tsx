import Visibility from "./Icons/Visibility"
import Humidity from "./Icons/Humidity"
import Feels from "./Icons/Feels"
import Wind from "./Icons/Wind"
import Pressure from "./Icons/Pressure"
import Pop from "./Icons/Pop"

type Props = {
    icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
    title: string
    info:string | JSX.Element
    description: string
}

const icons = {
wind: Wind,
feels: Feels,
humidity: Humidity,
visibility: Visibility,
pressure: Pressure,
pop: Pop,
}


const Tile = ({icon, title, info, description}: Props): JSX.Element=> {
    const Icon =icons[icon]

    return(
        <article className='w-[140px] h-[130px] text-zinc-700 font-bold flex flex-col justify-between bg-white/20 backdrop-blur-1g rounded drop-shadow-lg p-2 mb-5'>
           <div className="flex items-center text-sm font-bold">
            <Icon/> <h4 className="m1-1">{title}</h4>
            </div>
        <h3 className='mt-2 text-lg'>{info}</h3>
        <p className='text-xs font-bold'>{description}</p>
        </article>
    )
}

export default Tile