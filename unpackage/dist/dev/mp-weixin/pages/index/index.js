"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_uni_list_item = common_vendor.resolveComponent("uni-list-item");
  const _component_uni_list = common_vendor.resolveComponent("uni-list");
  (_component_uni_list_item + _component_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "航班时间",
      note: ""
    }),
    b: common_vendor.p({
      title: "航班号",
      note: ""
    }),
    c: common_vendor.p({
      title: "飞机号",
      note: ""
    }),
    d: common_vendor.p({
      title: "起降机场",
      note: ""
    }),
    e: common_vendor.p({
      title: "机位-准备室",
      note: ""
    }),
    f: common_vendor.p({
      title: "机组",
      note: ""
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
