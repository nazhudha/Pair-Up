import React, {Link} from 'react'

export default function JoinButton({ projectId }) {

  const joinProject = () => {
    console.log(projectId)
  }

  return (
    <>
      <Link
        to="/project/joinrequestsent"
        onClick={() => {
          joinProject();
        }}
      >
        <button>
          JOIN
        </button>
      </Link>
    </>
  )
}
