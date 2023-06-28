import {Product} from '../data/products';
import {ScreenNames} from '../utils/routes';

type RootStackParamList = {
  [ScreenNames.Splash]: undefined;
  [ScreenNames.SignIn]: undefined;
  [ScreenNames.SignUp]: undefined;
  [ScreenNames.Home]: undefined;
  [ScreenNames.Favorites]: undefined;
  [ScreenNames.Profile]: undefined;
  [ScreenNames.Tabs]: undefined;
  [ScreenNames.ProductDetails]: {product: Product};
  [ScreenNames.Settings]: undefined;
  [ScreenNames.ProfileStack]: undefined;
};

export default RootStackParamList;
