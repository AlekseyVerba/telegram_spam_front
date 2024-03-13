import { classNames } from "shared/lib/classNames/classNames"
import { TabItem } from "../../model/types/tab"
import { useMemo, useState } from "react"
import { TabButton } from "../TabButton/TabButton"
import { TabContent } from "../TabContent/TabContent"
import './Tab.scss'

interface Props {
    items: TabItem[]
}

export const Tab = (props: Props) => {
    const { items } = props

    const [tabIdx, setTabIdx] = useState<number>(1)

    const {buttons, contents} = useMemo(() => {
        const buttons: React.JSX.Element[] = []
        const contents: React.JSX.Element[] = []

        items.forEach((item, idx) => {
            const isActive = tabIdx === idx

            buttons.push(<TabButton title={item.title} onClick={() => setTabIdx(idx)} isActive={isActive} />)
            contents.push(<TabContent content={item.content} isActive={isActive}  />)
        })

        return {buttons, contents}
    }, [items, tabIdx])

    return (
        <div className={classNames('Tab')}>
            <div className={classNames('Tab__buttons')}>
                {buttons}
            </div>
            <div className={classNames('Tab__contents')}>
                {contents}
            </div>
        </div>
    )
}