import React from 'react';

import {Header} from '../../../screens/components';
import {EditSenderRouteComponent} from '../components/editSenderRouteComponent';
import {stores} from '../../../stores';
import {NavigationService} from '../../../services';

export const EditSenderRouteScreen: React.FC = () => {
  const {
    routeStore: {resetCustomRoute, saveCustomRoute},
  } = stores;

  const onSave = () => {
    saveCustomRoute();
    NavigationService.goBack();
  };

  return (
    <>
      <Header
        title={'Редактирование маршрута'}
        isBackButton
        onBackPress={resetCustomRoute}
      />
      <EditSenderRouteComponent onSave={onSave} />
    </>
  );
};
