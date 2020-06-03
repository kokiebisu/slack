import React from 'react';
import {
  useNewTeamDispatch,
  useNewTeamState,
} from '../context/newTeam-context';

export const Test = () => {
  const { team, channel } = useNewTeamState();
  const dispatch = useNewTeamDispatch();

  return (
    <div>
      <h1>{team}</h1>
      <h1>{channel}</h1>
      <button
        onClick={() =>
          dispatch({ type: 'add_team', payload: 'new team is here' })
        }
      />
    </div>
  );
};
