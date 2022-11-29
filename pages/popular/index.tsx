import { useState } from 'react';
import {Header} from '../components/header'
export default function Popular (){
  const [sidebar, setSideBar] = useState(false);
    return (
        <div>
            <Header set={setSideBar}/>
        </div>
    )
}