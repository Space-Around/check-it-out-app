import AccountView from '../account/AccountView';
import FavoriteListView from '../favorite/FavoriteListView';
import HomeView from '../home/HomeView';
import SettingsView from '../settings/SettingsView';


const iconHome = require('../../../assets/images/tabbar/home.png');
const iconSettings = require('../../../assets/images/tabbar/settings.png');
const iconFavorite = require('../../../assets/images/tabbar/favorite.png');
const iconAccount = require('../../../assets/images/tabbar/account.png');

const tabNavigationData = [
  {
    name: 'Account',
    component: AccountView,
    icon: iconAccount,
  },
  {
    name: 'Home',
    component: HomeView,
    icon: iconHome,
  },
  {
    name: 'Favorite',
    component: FavoriteListView,
    icon: iconFavorite,
  },
  {
    name: 'Settings',
    component: SettingsView,
    icon: iconSettings,
  },
];

export default tabNavigationData;