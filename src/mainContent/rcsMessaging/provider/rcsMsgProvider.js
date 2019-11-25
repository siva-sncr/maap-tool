import React, { Component } from 'react';
import * as RcsMsgUtility from '../../../utility/RcsMsgUtility';

export const RcsMsgContext = React.createContext();

class RcsMsgProvider extends Component {

  state = {
    options: RcsMsgUtility.tableOptions,
    tableVerticalScroll: true
  }

  componentDidMount = async () => {
  }

  componentWillReceiveProps(nextProps) {
    console.log(" nextProps  ",nextProps);
  }

  onTablePageChange = (pageNo, sizePerPage) => {
    RcsMsgUtility.tableOptions.pageNo = pageNo;
    RcsMsgUtility.tableOptions.pageSize = sizePerPage;
  }


  render() {
    return (
      <RcsMsgContext.Provider value={{
        state: this.state,
        onPageChange: this.onTablePageChange
      }}>
        {this.props.children}
      </RcsMsgContext.Provider>
    )
  }
}

export default RcsMsgProvider;

export const RcsMsgConsumer = RcsMsgContext.Consumer;