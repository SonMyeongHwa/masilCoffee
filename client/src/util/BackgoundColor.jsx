import IncludeRedPage from "./IncludeRedPage";
import includeCianPage from "./includeCianPage";
import { back_ground_color } from "../type/color_type";

const backgroundColor = (location) => {
  if(!IncludeRedPage(location) && !includeCianPage(location)) {
    return back_ground_color.sub_color;
  } else if (IncludeRedPage(location) && !includeCianPage(location)) {
    return back_ground_color.main_color;
  } else if (!IncludeRedPage(location) && includeCianPage(location)) {
    return back_ground_color.admin_color;
  }
}

export default backgroundColor;