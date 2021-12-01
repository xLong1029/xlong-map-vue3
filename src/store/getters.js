const getters = {
  // app
  pageLoading: (state) => state.app.pageLoading,
  sysLoading: (state) => state.app.sysLoading,
  sysTitle:(state) => state.app.sysTitle,
  currentEnv: (state) => state.app.currentEnv,
  companyName: (state) => state.app.companyName,
  // permission
  permissionRoutes: state => state.permission.routes,
  // user
  token: (state) => state.user.token,
  user: (state) => state.user.user,
  roles: (state) => state.user.user.roles,
  // settings
  theme:(state) => state.settings.theme,
  showSettings:(state) => state.settings.showSettings,
  fixedHeader:(state) => state.settings.fixedHeader,
  mapInfoPanel:(state) => state.settings.mapInfoPanel,
  mapUtilsPanel:(state) => state.settings.mapUtilsPanel,
  mapOperatePanel:(state) => state.settings.mapOperatePanel,
  switchMap:(state) => state.settings.switchMap,
  mapBottomCoord:(state) => state.settings.mapBottomCoord,
  // map  
  mapEvent:(state) => state.map.mapEvent,
  locateData: (state) => state.map.locateData,
};

export default getters;
