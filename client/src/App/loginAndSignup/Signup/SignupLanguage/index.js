import React from 'react'
import {Link} from 'react-router-dom'

export default function SignupLanguage() {




  return (
    <>
      <div>
        <input type="checkbox" value="ruby" name="ruby"/> ruby
        <input type="checkbox" value="javascript" name="javascript"/> javascript
        <input type="checkbox" value="python" name="python"/> python
      </div>
    <Link to="/signupcredentials">
      <button>
        NEXT
      </button>
    </Link>
  </>
  )
}
