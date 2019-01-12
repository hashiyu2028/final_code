//L205

import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign'; //L208

class RequestRow extends Component {
  onApprove = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();

    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  //L209
  onFinalize = async () => {
    const campaign = Campaign(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  render() {
    const { Row, Cell } = Table;

    // const { id, request }= this.props;
    const { id, request, approversCount } = this.props; //L207

    //L211
    const readyToFinalize = request.approvalCount > approversCount / 2;

//L205, 206
    return (
        // <div>Request!</div> //L205
      <Row
        disabled={request.complete} //L211 Approveされるとグレーアウト
        positive={readyToFinalize && !request.complete} //Ready to finalizeだとグリーンに
      >
      
       {/* <Cell>{this.props.id}</Cell> */}
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>

        <Cell>
          {request.approvalCount}/{approversCount}
        </Cell>

        {/* L208 Approving request */}
        {/* Approveされると、ボタンが消える仕様 */}
        <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>

        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Cell>

      </Row>
    );
  }
}

export default RequestRow;