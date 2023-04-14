const CardDisplay = ({ imageSrc }) => {

    return (
        <div className='list-display d-none d-sm-block' style={{ position: 'sticky', top: '1rem' }} >
            <img className='img-fluid cardMask' src={imageSrc} alt='Card Display' />
        </div>
    )
}

export default CardDisplay
// to bannedListPage