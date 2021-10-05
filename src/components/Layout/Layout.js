import React from 'react'
import Aux from '../../hoc/Ax'
import  './Layout.css'

const layout = ( props ) => (
    <Aux>
        <div>Title</div>
        <main className='Content'>{props.children}</main>
    </Aux>
)

export default layout