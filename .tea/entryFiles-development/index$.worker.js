if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../node-modules/npm-scope-dcloudio/uni-ui/lib/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/refresh?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/navTab?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-steps/uni-steps?hash=4f3f44db986be84bb3e7c699e0f2fdbffe19a890');
require('../../pages/auditDetail/xnVehicleUseApply?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/xnVehicleMaintainApply?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/xnWorkSupervision?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/xnManagerMeetingApproval?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/xnPartyMeetingApproval?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/xnContractReviewFrame?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/projectApply?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/projectConfirm?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/engineerBidApply?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/nonEngineerBidApply?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/attachList?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/nhTargetCostApproval?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/estimateApproval?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/auditDetail/xnContractReviewTender?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/tabbar/tabbar-1/tabbar-1?hash=fff32e4efb6594afd7ae7a0bd5dcfa1396cd75ce');
require('../../pages/tabbar/tabbar-2/tabbar-2?hash=45048ddfb12de26f655f4a1f5d63e7af157438eb');
require('../../pages/tabbar/tabbar-3/tabbar-3?hash=fff32e4efb6594afd7ae7a0bd5dcfa1396cd75ce');
require('../../pages/auditDetail/index?hash=4f2ef1cd976d2767d0ab456e3f2c4b9c02bb5d7a');
require('../../pages/auditDetail/file?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}