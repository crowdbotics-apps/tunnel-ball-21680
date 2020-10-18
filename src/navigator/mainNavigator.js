import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0148105Navigator from '../features/BlankScreen0148105/navigator';
import UserProfile148095Navigator from '../features/UserProfile148095/navigator';
import Tutorial148094Navigator from '../features/Tutorial148094/navigator';
import NotificationList148066Navigator from '../features/NotificationList148066/navigator';
import Settings148065Navigator from '../features/Settings148065/navigator';
import Settings148057Navigator from '../features/Settings148057/navigator';
import UserProfile148055Navigator from '../features/UserProfile148055/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0148105: { screen: BlankScreen0148105Navigator },
UserProfile148095: { screen: UserProfile148095Navigator },
Tutorial148094: { screen: Tutorial148094Navigator },
NotificationList148066: { screen: NotificationList148066Navigator },
Settings148065: { screen: Settings148065Navigator },
Settings148057: { screen: Settings148057Navigator },
UserProfile148055: { screen: UserProfile148055Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
