
import Utils from "udn-newmedia-utils";

let mob = Utils.detectMob();

export default {
  PCgameWidth: 1920,
  // PCgameWidth: 880,
  PCgameHeight: 667,
  MobgameWidth: 375,
  MobgameHeight: 667,
  getGameWidth: function(){
    return (mob) ? this.MobgameWidth : this.PCgameWidth;
  },
  getGameHeight: function(){
    return (mob) ? this.MobgameHeight : this.PCgameHeight;
  }
};
