moduloDirectivas.component('actions2', {
    templateUrl: "js/system/component/actions/actions2.html",
    controllerAs: 'act',
    controller: actions2,
    bindings:
            {
                id: '<',
                name: '<',
                idforeign: '<'
            }
});
function actions2(constantService, sessionService) {
    var self = this;
    //self.idforeign.id = obj.obj_usuario.id;
    self.appurl = constantService.getCAppUrl();
    self.session_info = sessionService.getSessionInfo();
    self.isSessionActive = sessionService.isSessionActive();
}