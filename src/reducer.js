import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action){
    //figure out which functions to call and call it
    switch(action.type){
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'NEXT':
            return next(state);
        case 'VOTE':
            //return vote(state, action.entry);
            return state.update('vote',
                voteState => vote(voteState, action.entry));
    }
    //returns current state if type is unknown
    return state;
}