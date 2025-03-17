export const formFields = [
  {
    name: "activityName",
    label: "活动名称",
    type: "text",
    placeholder: "请输入活动名称",
    isRequired: true,
    errorMessage: "必填项",
  },
  {
    name: "orderType",
    label: "订单类型",
    type: "text",
    placeholder: "请输入订单类型",
    isRequired: true,
    errorMessage: "必填项",
  },
  {
    name: "activityProd",
    label: "活动产品",
    type: "text",
    placeholder: "请输入活动产品",
    isRequired: true,
    errorMessage: "必填项",
  },
  {
    name: "activityPrice",
    label: "活动售价",
    type: "text",
    placeholder: "请输入活动售价",
    isRequired: true,
    errorMessage: "必填项",
  },
  {
    name: "count",
    label: "购买数量 ",
    type: "text",
    placeholder: "请输入购买数量",
    isRequired: true,
    errorMessage: "必填项",
  },
  {
    name: "gift",
    label: "赠品",
    type: "text",
    placeholder: "请输入赠品",
    isRequired: true,
    errorMessage: "必填项",
  },
];

export function buildFieldMappingString() {
  return formFields.reduce((pre, cur) => {
    return `${pre}${cur.label}(${cur.name})，`;
  }, "");
}

export function cleanData(data: string) {
  const pattern = /```json([\s\S]*?)```/;
  const match = data.match(pattern);

  if (match) {
    return JSON.parse(match[1]);
  } else {
    return {};
  }
}
