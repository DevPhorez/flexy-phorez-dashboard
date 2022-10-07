// @ts-ignore
import PhPopover from '../Popover/Popover.tsx';

import { RiNotification2Line } from "react-icons/ri";

import { allNotifications } from '../../Data/data'

function Notifications () {
    return (
        <>
            <PhPopover id={'notifications'} title={'اعلان'} items={allNotifications} color='info' icon={<RiNotification2Line color='rgba(0, 0, 0, .3)' size={22} />}></PhPopover>
        </>

    )
}

export default Notifications