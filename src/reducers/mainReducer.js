import _ from 'lodash'
import { COMPANIES, ALL_CAMPAIGNS, ALL_JOBSEEKERS_BY_CAMPAIGN} from '../actions/types.js';

export default function(state = {}, action){
    switch(action.type){
        case COMPANIES:
            return { ...state, companies: action.payload}
        case ALL_CAMPAIGNS:
          return { ...state, allCampaigns: _.mapKeys(action.payload, 'campaign_id') }
          //return { ...state, allCampaigns: action.payload }
        case ALL_JOBSEEKERS_BY_CAMPAIGN:
          //CALY SEKRET JEST TU: TRZEBA ZAPISAC JOBSEEKEROW DO CAMPANII
          return {...state, jobseekers: _.map(state.allCampaigns, campaign=>{
              console.log('FROM REDUCER, SELECTED campaign FROM STATE: ' + campaign.campaign_id);
              if(action.payload){
                  action.payload.map(jobseeker => {
                    if(jobseeker.job_status === 'applied' && jobseeker.campaign_id === campaign.campaign_id){
                      campaign.jobseekers = action.payload
                    }
                })
              }
            })
          }
    }

    return state;
}
