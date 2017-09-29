import React, { Component } from 'react';
import { fetchCompanies } from '../../actions'
import { connect } from "react-redux"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class ClientsTabParent extends Component {
	componentWillMount(){
		this.props.fetchCompanies()
	}
  render() {

  	const cardStyle = {
      marginTop: "20px",
    }


    return (
      <div style={{width: '95vw', margin: '0 auto'}}>
      {this.props.companies && this.props.companies.map((company)=>{
      	


          return(
            <div>

            <Card style={cardStyle}>






              <CardHeader
                style={{height: "70px", textAlign: "left"}}
                actAsExpander={true}
                showExpandableButton={true}
                iconStyle={{position: "relative", left: "12px"}}
              >
                <p style={{fontSize: "18px", margin: "-10px", marginTop: "-30px", padding: "0"}}><b>{company.company_name}</b></p>
                <p style={{color: 'grey', fontSize: "14px", margin: "-10px", marginTop: "10px", padding: "0"}}>{company.post_code}</p>
			  </CardHeader>






              <CardText expandable={true} style={{paddingBottom: "1px", paddingTop: "1px"}}>
              <div style={{borderTop: "1px solid #DCDCDC", paddingTop: "10px"}}>
                <div style={{maxWidth: "500px", margin: "0 auto", textAlign: "left"}}>
                </div>
              </div>
            </CardText>
          </Card>
          </div>
        )






      })}</div>
    )
  }
}



function mapStateToProps(state) {
  return {
    companies: state.main.companies
  };
}

export default connect(mapStateToProps, { fetchCompanies })(ClientsTabParent)