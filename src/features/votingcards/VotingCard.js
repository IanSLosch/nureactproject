import { Card, CardHeader, CardBody, Col } from 'reactstrap'

const VotingCard = ({ vCardId, state }) => {
    // console.log(state)

    // if(state) {
    //     item = BANNEDLISTOBJECTS.find(i => i.displayName === state);
    // } else {
    //     item = null
    // }

    return (
          <Card className='text-center' id={vCardId}>
              <CardHeader >
                  <img src={state.image} alt={state.id} style={{width: "100%", height: "100%", objectFit: "cover" }} />
              </CardHeader>
              <CardBody>
                  <h4>{state.displayName}</h4>
              </CardBody>
          </Card>
    )
}

export default VotingCard