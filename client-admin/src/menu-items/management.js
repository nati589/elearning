// assets
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  SnippetsOutlined,
  BookOutlined,
} from "@ant-design/icons";

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  DeleteOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  SnippetsOutlined,
  BookOutlined,
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const management = {
  id: "utilities",
  title: "Management",
  type: "group",
  children: [
    {
      id: "util-typography",
      title: "Course Management",
      type: "item",
      url: "/coursemanagement",
      icon: icons.SnippetsOutlined,
    },
    {
      id: "util-color",
      title: "Web Content Management",
      type: "item",
      url: "/webcontent",
      icon: icons.BgColorsOutlined,
    },
    {
      id: "util-book",
      title: "Book Management",
      type: "item",
      url: "/bookmanagement",
      icon: icons.BookOutlined,
    },
    {
      id: "trash",
      title: "Trash",
      type: "item",
      url: "/trash",
      icon: icons.DeleteOutlined,
      breadcrumbs: false,
    },
  ],
};

export default management;
