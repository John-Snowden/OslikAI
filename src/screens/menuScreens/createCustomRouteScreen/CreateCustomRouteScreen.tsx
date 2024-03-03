import React from 'react';

import {Header} from '../../components';
import {EditSenderRouteComponent} from '../../../screens/routesStack/components/editSenderRouteComponent';
import {stores} from '../../../stores';
import {EMenuScreens} from '../../../constants';
import {NavigationService} from '../../../services';

export const CreateCustomRouteScreen: React.FC = () => {
  const {
    routeStore: {resetCustomRoute, setManualRouteSave},
  } = stores;

  const onSave = () => {
    setManualRouteSave(true);
    NavigationService.navigate(EMenuScreens.NameRouteScreen);
  };

  return (
    <>
      <Header
        title={'Новый маршрут'}
        isBackButton
        onBackPress={resetCustomRoute}
      />
      <EditSenderRouteComponent onSave={onSave} />
    </>
  );
};
