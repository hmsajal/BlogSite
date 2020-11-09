import React from 'react'
import FbIcon from '../../static/svg-icons/fbIcon.js'

const PillStack = () => {
    return (
        <ul className="list-none flex flex-row mt-4 space-x-8">
            <li>
                <a href="https://facebook.com/sajalhm" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                    <FbIcon size='40px' />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/sajal_here" className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                    <FbIcon size='40px' />
                </a>
            </li>
        </ul>
    )
}

export default PillStack
