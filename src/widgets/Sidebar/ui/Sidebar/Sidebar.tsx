import { useMemo } from 'react'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItems } from 'widgets/Sidebar/model/types/Sidebar'
import './Sidebar.scss'

export const Sidebar = () => {
    const items = useMemo(() => {
        return SidebarItems.map(sidebarItem => <SidebarItem item={sidebarItem} key={sidebarItem.path} />)
    }, [])

    return (
        <div className="Sidebar">
            {items}
        </div>
    )
}