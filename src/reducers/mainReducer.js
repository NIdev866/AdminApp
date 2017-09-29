import { COMPANIES, ALL_CAMPAIGNS } from '../actions/types.js';

export default function(state = {}, action){
    switch(action.type){
        case COMPANIES:
            return { ...state, companies: action.payload}
    case ALL_CAMPAIGNS:
      return { ...state, allCampaigns: action.payload }
    }

    return state;
}
