
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
                <BeatLoader color='#f6e0a1' css={override} size={35} />
            </div>
            <div className="loaderContainer">
                <BeatLoader color='#f6e0a1' css={override} size={85} />
            </div>
        </>
    )
}

export default Loader
