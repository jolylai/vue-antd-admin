import request from "@/utils/request";

export type Job = {
  id: number;
  code: string;
  name: string;
  order: number;
  status: number;
  remark?: any;
  createdAt: string;
  updatedAt: string;
};

export const queryJobList = (params: any) => {
  return request<{ list: Job[]; total: number }>({
    url: "/api/job",
    method: "get",
    params,
  });
};

export type Menu = {
  type: string;
  icon: string;
  name: string;
  order: number;
  path: string;
  parentId: number;
  isLink: number;
  visible: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
};

export const queryMenuList = (params: any) => {
  return request<{ list: Menu[]; total: number }>({
    url: "/api/menu",
    method: "get",
    params,
  });
};

export const saveMenu = (data: Menu) => {
  return request<Menu>({
    url: "/api/menu",
    method: "post",
    data,
  });
};
