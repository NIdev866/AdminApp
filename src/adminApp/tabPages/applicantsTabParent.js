import React, { Component } from 'react';
import _ from 'lodash'
import { fetchAllCampaigns,fetchAllJobseekersByCampaignId } from '../../actions'
import { connect } from "react-redux"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


class ApplicantsTabParent extends Component {
	componentWillMount(){
		this.props.fetchAllCampaigns()
	}
  render() {

  	const cardStyle = {
      marginTop: "20px",
    }


    return (
      <div style={{width: '95vw', margin: '0 auto'}}>
      {this.props.allCampaigns && _.map(this.props.allCampaigns, (campaign)=>{
					//console.log('FROM COMPONENT: ' + campaign.campaign_id);
				  this.props.fetchAllJobseekersByCampaignId(campaign.campaign_id)

          return(
            <div>

            <Card style={cardStyle}>

              <CardHeader
                style={{height: "70px", textAlign: "left"}}
                actAsExpander={true}
                showExpandableButton={true}
                iconStyle={{position: "relative", left: "12px"}}
              >
                <p style={{fontSize: "18px", margin: "-10px", marginTop: "-30px", padding: "0"}}><b>{campaign.campaign_name}</b></p>
                {/*<p style={{color: 'grey', fontSize: "14px", margin: "-10px", marginTop: "10px", padding: "0"}}>Starting on {DATE OF START HERE}</p>*/}
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
    allCampaigns: state.main.allCampaigns
  };
}

export default connect(mapStateToProps, { fetchAllCampaigns , fetchAllJobseekersByCampaignId})(ApplicantsTabParent)
