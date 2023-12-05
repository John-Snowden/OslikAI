import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const NavigationService = {
  navigate: (route: string, params?: {[key: string]: unknown}): void => {
    if (navigationRef.isReady()) {
      navigationRef.current?.navigate(route as never, params as never);
    }
  },
  replace: (route: string, params?: {[key: string]: unknown}): void => {
    if (navigationRef.isReady()) {
      navigationRef.current?.dispatch(StackActions.replace(route, params));
    }
  },
  reset: (route: string): void => {
    if (navigationRef.isReady()) {
      navigationRef.current?.reset({routes: [{name: route}]});
    }
  },
  push: (route: string, params?: {[key: string]: unknown}): void => {
    if (navigationRef.isReady()) {
      navigationRef.current?.dispatch(StackActions.push(route, params));
    }
  },
  goBack: (count: number = 1): void => {
    if (navigationRef.isReady()) {
      for (let i = 0; i < count; i++) navigationRef.current?.goBack();
    }
  },
  stackPop: (count?: number): void => {
    if (navigationRef.isReady()) {
      navigationRef.current?.dispatch(StackActions.pop(count));
    }
  },

  setParams: (params?: {[key: string]: unknown}): void => {
    if (navigationRef.isReady()) {
      navigationRef.current?.setParams(params as never);
    }
  },
};
