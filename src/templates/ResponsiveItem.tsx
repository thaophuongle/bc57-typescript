import React, { useEffect, useState } from 'react'

type Props = {
    MobileComponent?: JSX.Element
    Component: JSX.Element
}

interface Screen {
    width:number,
    height:number
}

const ResponsiveItem = ({MobileComponent, Component}: Props) => {
    const [ComponentRender, setComponentRender] = useState<JSX.Element>(<div>default</div>)
const [screen, setScreen] = useState<Screen>({
    width:window.innerWidth,
    height:window.innerHeight
})


const setScreenDevice = () => {
    if (window.innerWidth < 768 && MobileComponent) {
        setComponentRender(MobileComponent)
}
else {
    setComponentRender(Component)
}
}



useEffect(() => { //khi user resize hoặc load lại trang
    window.onload = setScreenDevice
    window.onresize = setScreenDevice
    return () => {
        window.removeEventListener('onload', setScreenDevice)
        window.removeEventListener('onresize', setScreenDevice)
    }
}, [])

useEffect(() => {
    setScreenDevice()
}, [screen.width])



  return (
    <div>
        {ComponentRender}
    </div>
  )

}

export default ResponsiveItem

/*
    <TenComponent />: JSX.Element
    (props) => {return <div>content</div>}: React.FC
*/