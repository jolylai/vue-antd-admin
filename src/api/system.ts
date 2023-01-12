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
  id: number;
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



export type MenuQueryParams = {
  name?: string;
  status?: number;
  parentId?: number;
};

export const queryMenu = (params?: MenuQueryParams) => {
  return request<MenuQueryParams, Menu[]>({
    url: "/api/menu",
    method: "get",
    params,
  });
};

export const viewMenu = (menuId: number) => {
  return request<number, Menu>({
    url: `/api/menu/${menuId}`,
    method: "get",
  });
};

export const saveMenu = (data: Menu) => {
  return request<Menu>({
    url: "/api/menu",
    method: "post",
    data,
  });
};

export const deleteMenu = (menuId: number) => {
  return request({
    url: `/api/menu/${menuId}`,
    method: "delete",
  });
};
