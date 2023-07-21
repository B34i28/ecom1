import {FC} from 'react'

const Wrapper : FC<{children:React.ReactNode}> = ({children})=> {
  return (
    <div className='max-w-7xl px-4 md:px-10 mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper