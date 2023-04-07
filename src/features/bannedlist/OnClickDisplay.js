const OnClickDisplay = ({ imageSrc }) => {

    return (
        <div className='list-display d-none d-sm-block' >
            <img className='img-fluid cardMask' src={imageSrc} alt='card' />
        </div>
    )
}

export default OnClickDisplay

