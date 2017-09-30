import _ from 'lodash'
import { COMPANIES, ALL_CAMPAIGNS, ALL_JOBSEEKERS_BY_CAMPAIGN, UPDATE_JOBSEEKERSTATUS_TO_SELECTED} from '../actions/types.js';

export default function(state = {}, action){
    switch(action.type){
        case COMPANIES:
            return { ...state, companies: action.payload}
        case ALL_CAMPAIGNS:
          console.log('heuee')
          return { ...state, allCampaigns: _.mapKeys(action.payload, 'campaign_id') }
          //return { ...state, allCampaigns: action.payload }
        case ALL_JOBSEEKERS_BY_CAMPAIGN:
          //CALY SEKRET JEST TU: TRZEBA ZAPISAC JOBSEEKEROW DO CAMPANII
          return {...state, jobseekers: _.map(state.allCampaigns, campaign=>{

              if(action.payload.data){
                  action.payload.data.map(jobseeker => {
                    if(jobseeker.job_status === 'applied' && jobseeker.campaign_id === campaign.campaign_id){
                      campaign.jobseekers = action.payload.data
                    }
                })
              }
            })
          }
        case UPDATE_JOBSEEKERSTATUS_TO_SELECTED:
          return { ...state }
    }

    return state;
}
