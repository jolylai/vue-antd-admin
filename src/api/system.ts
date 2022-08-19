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
