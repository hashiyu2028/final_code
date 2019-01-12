//L187

import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign'; //L190
import web3 from '../ethereum/web3';
import { Router } from '../routes'; //L192 refreshing contract data

class ContributeForm extends Component {
//L189
  state = {
    value: '',
    errorMessage: '', //L193 errormessage
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    //L190 addressを指定
    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    //L191
    //エラー表示するためのtry-catch statement
    //etherからweiに変換
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      //L192 refreshing contract data, updating page automatically
      Router.replaceRoute(`/campaigns/${this.props.address}`);

    } catch (err) {
      this.setState({ errorMessage: err.message }); //L193 show error message
    }

    //L193 loadingが失敗したら、''空欄を返す
    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;