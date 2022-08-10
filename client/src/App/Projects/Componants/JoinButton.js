import React, {Link} from 'react'

import { joinProject } from '../Functions/joinProject'

export default function JoinButton({ projectId }) {

  const handleOnClick = () => {
    joinProject(projectId)
  }

  // to="/project/joinrequestsent"
  return (
    <>

        <button onClick={handleOnClick}>
          JOIN
        </button>
 
    </>
  )
}
