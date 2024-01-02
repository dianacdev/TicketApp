import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-nav flex justify-between p-4">
        <div className="flex items-center space-x-4">
            <Link href={"/"}>
                <FontAwesomeIcon icon={faHome} className="icon"/>
            </Link>
            <Link href={"/TicketPage/new"}>
                <FontAwesomeIcon icon={faTicket} className="icon"/>
            </Link>
        </div>
        <div>
            <p>Login</p>
        </div>
    </nav>
  )
}

export default Nav