import {
  MdOutlineForum,
  MdOutlineNotifications,
  MdSearch,
  MdOutlineEmail,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex border-t">
      <a className="flex items-center justify-center w-1/4 p-2">
        <MdOutlineForum className="h-7 w-7" />
      </a>
      <a className="flex items-center justify-center w-1/4 p-2">
        <MdSearch className="h-7 w-7" />
      </a>
      <a className="flex items-center justify-center w-1/4 p-2">
        <MdOutlineNotifications className="h-7 w-7" />
      </a>
      <a className="flex items-center justify-center w-1/4 p-2">
        <MdOutlineEmail className="h-7 w-7" />
      </a>
    </footer>
  );
}
