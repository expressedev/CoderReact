
import { css } from '@emotion/react'
import BeatLoader from 'react-spinners/BeatLoader'
import './Loader.css'

const Loader = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
`;

    return (
        <>
            <div className="loaderContainerMobile">
                <BeatLoader color='#f7c94a' css={override} size={40} />
            </div>
            <div className="loaderContainer">
                <BeatLoader color='##f7c94a' css={override} size={100} />
            </div>
        </>
    )
}

export default Loader
