import { TableColumnsType } from "ant-design-vue";

export type XtepTableProps = {
  columns: XtepColumn[];
};

export type ValueType =
  | "password"
  | "money"
  | "textarea"
  | "date"
  | "dateTime"
  | "dateWeek"
  | "dateMonth"
  | "dateQuarter"
  | "dateYear"
  | "dateRange"
  | "dateTimeRange"
  | "time"
  | "timeRange"
  | "text"
  | "select"
  | "treeSelect"
  | "checkbox"
  | "rate"
  | "radio"
  | "radioButton"
  | "progress"
  | "percent"
  | "digit"
  | "second"
  | "avatar"
  | "code"
  | "switch"
  | "fromNow"
  | "image"
  | "jsonCode"
  | "color"
  | "cascader";

export interface XtepColumn {
  title?: string;
  dataIndex?: string;
  valueType?: "indexBorder" | "dateTime";
  key?: string;
  width?: number;
  tip?: string;
  copyable?: boolean;
  ellipsis?: boolean;
  sorter?: boolean;
}
