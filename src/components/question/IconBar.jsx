import {
  MdChatBubbleOutline,
  MdBookmarkBorder,
  MdIosShare,
  MdMoreHoriz,
} from "react-icons/md";

export default function IconBar() {
  return (
    <>
      <div className="w-1/4 flex space-x-1 items-center justify-start">
        <MdChatBubbleOutline className="w-5 h-5" />
        <span className="text-xs">56,789</span>
      </div>
      <div className="w-1/4 flex items-center justify-start">
        <MdBookmarkBorder className="w-5 h-5" />
      </div>
      <div className="w-1/4 flex justify-start">
        <MdIosShare className="w-5 h-5" />
      </div>
      <div className="w-1/4 flex justify-start">
        <MdMoreHoriz className="w-5 h-5" />
      </div>
    </>
  );
}
