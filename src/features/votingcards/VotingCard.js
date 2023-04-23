import { Card, CardHeader, CardBody} from 'reactstrap'

const VotingCard = ({ vCardId, state }) => {

    return (
          <Card className='text-center' id={vCardId}>
              <CardHeader >
                  <img src={state.image || state.image_uris.art_crop} alt={state.id} style={{width: "100%", height: "100%", objectFit: "cover" }} />
              </CardHeader>
              <CardBody>
                  <h4>{state.name}</h4>
              </CardBody>
          </Card>
    )
}

export default VotingCard