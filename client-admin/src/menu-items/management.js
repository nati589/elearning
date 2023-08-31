// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  SnippetsOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const management = {
  id: 'utilities',
  title: 'Management',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Course Management',
      type: 'item',
      url: '/coursemanagement',
      icon: icons.SnippetsOutlined
    },
    {
      id: 'util-color',
      title: 'Web Content Management',
      type: 'item',
      url: '/webcontent',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default management;
