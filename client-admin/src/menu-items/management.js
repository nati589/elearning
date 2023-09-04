// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
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
  AntDesignOutlined,
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
      id: "ant-icons",
      title: "Ant Icons",
      type: "item",
      url: "/icons/ant",
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
    },
  ],
};

export default management;
