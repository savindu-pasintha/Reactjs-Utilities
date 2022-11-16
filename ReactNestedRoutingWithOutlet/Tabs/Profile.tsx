import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <div className="homeDiv">
      <Link to="/profile" className="profileBtn">
        Profile
      </Link>
    </div>
  )
}
