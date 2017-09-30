import React, { Component } from 'react';
import _ from 'lodash'
import { fetchAllCampaigns,fetchAllJobseekersByCampaignId, updateJobseekerJobStatus } from '../../actions'
import { connect } from "react-redux"
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import axios from 'axios';







class ApplicantsTabParent extends Component {
  constructor(props){
    super(props)
    this.seeIfJobseekerHasStatusSelected = this.seeIfJobseekerHasStatusSelected.bind(this)
  }
	componentWillMount(){
    if(!this.props.allCampaigns){
		  this.props.fetchAllCampaigns()
    }
	}




  seeIfJobseekerHasStatusSelected(job_status){
    if(job_status == 'applied'){
      return false
    }
    else{
      return true
    }
  }





  render() {
  	const cardStyle = {
      marginTop: "20px",
    }
    return (
      <div style={{width: '95vw', margin: '0 auto'}}>
      {this.props.allCampaigns && _.map(this.props.allCampaigns, (campaign)=>{
          if(!campaign.jobseekers){
            this.props.fetchAllJobseekersByCampaignId(campaign.campaign_id)
          }
          return(
            <div>
              <Card style={cardStyle}>
                <CardHeader
                  style={{height: "160px", textAlign: "left"}}
                  actAsExpander={true}
                  showExpandableButton={true}
                  iconStyle={{position: "relative", left: "12px"}}
                >
                  <p style={{fontSize: "18px", margin: "-10px", marginTop: "-30px", padding: "0"}}><b>{campaign.campaign_name}</b></p>
                  <p style={{fontSize: "15px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{campaign.location}</p>
                  <p style={{fontSize: "15px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{campaign.job_type}</p>
                  <p style={{fontSize: "15px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{campaign.salary + " " + campaign.salary_type}</p>
                  <p style={{fontSize: "15px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{campaign.job_start_date ? `Starting on ${campaign.job_start_date}` : "Starting on 13/07/2017"}</p>
                </CardHeader>

                <CardText expandable={true} style={{paddingBottom: "1px", paddingTop: "1px"}}>

                  {!campaign.jobseekers ? 
                    <div>Loading...</div>
                    :
                    campaign.jobseekers.map((jobseeker)=>{
                      return (
                        <Card style={{marginBottom: '10px', position: 'relative'}}>
                          <CardHeader
                            style={{height: "90px", textAlign: "left"}}
                            actAsExpander={true}
                            showExpandableButton={true}
                            iconStyle={{position: "relative", left: "12px"}}
                          >
                            <p style={{fontSize: "16px", margin: "-10px", marginTop: "-30px", padding: "0"}}><b>{jobseeker.first_name + ' ' + jobseeker.last_name}</b></p>
                            <p style={{fontSize: "13px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{jobseeker.postal_code}</p>
                            <p style={{fontSize: "13px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{'Age range ' + jobseeker.age}</p>
                            <p style={{fontSize: "13px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{jobseeker.email_id}</p>
                            <p style={{fontSize: "13px", margin: "-10px", marginTop: "10px", padding: "0", color: "grey"}}>{jobseeker.contact_no}</p>
                          </CardHeader>

                          <Checkbox
                            disableTouchRipple
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}




                            checked={this.seeIfJobseekerHasStatusSelected(jobseeker.job_status)}
                            onCheck={this.props.updateJobseekerJobStatus(jobseeker)}







                            style={{position: 'absolute', top:'0px', left: 'calc(100% - 40px)', float: 'right'}}
                          />



                        </Card>
                      )
                    })
                  }

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
    allCampaigns: state.main.allCampaigns,
    jobseekers:state.main.jobseekers
  };
}

export default connect(mapStateToProps, { fetchAllCampaigns , fetchAllJobseekersByCampaignId, updateJobseekerJobStatus})(ApplicantsTabParent)