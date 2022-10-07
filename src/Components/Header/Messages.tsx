// @ts-ignore
import PhPopover from '../Popover/Popover.tsx';

import { FiMessageSquare } from "react-icons/fi";

import { allMessages } from '../../Data/data'

function Messages () {
    return (
        <>
            <PhPopover id={'messages'} title={'پیام'} items={allMessages} color='warning' icon={<FiMessageSquare color='rgba(0, 0, 0, .3)' size={22} />}>
                true
            </PhPopover>
        </>

    )
}

export default Messages