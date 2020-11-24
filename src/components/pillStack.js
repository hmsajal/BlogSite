import React from 'react'
import FbIcon from '../../static/svg-icons/fbIcon.js'
import TwitterIcon from '../../static/svg-icons/twitterIcon'
import LinkedinIcon from '../../static/svg-icons/linkedinIcon'

const PillStack = () => {
    return (
        <div className="mt-12 flex space-x-5">
            <a href="https://www.facebook.com/sajalhm">
                <FbIcon size="30px" color="blue" />
            </a>
            <a href="https://www.twitter.com/sajal_here">
                <TwitterIcon size="30px" />
            </a>
            <a href="https://www.linkedin.com/in/hmsajal">
                <LinkedinIcon size="30px" />
            </a>
        </div>
    )
}

export default PillStack

