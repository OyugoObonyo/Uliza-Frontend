import {
  MdChatBubbleOutline,
  MdBookmarkBorder,
  MdIosShare,
  MdMoreHoriz,
} from "react-icons/md";

export default function IconBar() {
  return (
    <div className="flex items-center justify-center border-t p-1">
      <div className="w-1/4 flex space-x-1 items-center justify-center">
        <MdChatBubbleOutline className="w-5 h-5" />
        <span className="text-xs">56,789</span>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <MdBookmarkBorder className="w-5 h-5" />
      </div>
      <div className="w-1/4 flex justify-center">
        <MdIosShare className="w-5 h-5" />
      </div>
      <div className="w-1/4 flex justify-center">
        <MdMoreHoriz className="w-5 h-5" />
      </div>
    </div>
  );
}
