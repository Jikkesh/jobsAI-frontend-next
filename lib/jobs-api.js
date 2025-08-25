// lib/axiosJobsApi.js
import { axiosApiClient } from './api.js';

const FALLBACK_DATA = {
  jobs: [],
  total: 0,
  currentPage: 1,
  totalPages: 0,
  hasNext: false,
  hasPrev: false
};

export const axiosJobsApi = {
  getJobById: async (jobId) => {
    return axiosApiClient.get(`/jobs/${jobId}`, {}, {
      timeout: 20000
    });
  },

  getJobsByCategory: async (category, currentPage = 1, pageSize = 10) => {
    return axiosApiClient.get(`/jobs/category/${category}`, {
      currentPage,
      pageSize
    }, {
      timeout: 25000
    });
  },

  getAllJobs: async (currentPage = 1, pageSize = 50, opts = {}) => {
    return axiosApiClient.get(`/jobs/`, {
      currentPage,
      pageSize
    }, {
      timeout: 25000
    });
  },

  getTrendingJobs: async (n = 5) => {
    return axiosApiClient.get(`/jobs/trending`, { n }, {
      timeout: 15000
    });
  },

  getLatestJobs: async () => {
    return axiosApiClient.get(`/jobs/latest`, {
      timeout: 15000
    });
  },

  createJob: async (jobData, opts = {}) => {
    const formData = new FormData();
    Object.keys(jobData).forEach((key) => {
      if (jobData[key] !== null && jobData[key] !== undefined) {
        formData.append(key, jobData[key]);
      }
    });

    return axiosApiClient.postFormData('/jobs/', formData, {
      timeout: 30000,
      ...opts
    });
  },

  updateJob: async (jobId, jobData, opts = {}) => {
    const formData = new FormData();
    Object.keys(jobData).forEach((key) => {
      if (jobData[key] !== null && jobData[key] !== undefined) {
        formData.append(key, jobData[key]);
      }
    });

    return axiosApiClient.putFormData(`/jobs/${jobId}`, formData, {
      timeout: 30000,
      ...opts
    });
  },

  deleteJob: async (jobId, opts = {}) => {
    return axiosApiClient.delete(`/jobs/${jobId}`, {
      timeout: 10000,
      ...opts
    });
  },

  // Build-safe versions
  safeGetJobsByCategory: async (category, currentPage = 1, pageSize = 10) => {
    const result = await axiosApiClient.safeGet(
      `/jobs/category/${category}`, 
      { currentPage, pageSize }, 
      FALLBACK_DATA
    );
    return result;
  },

  safeGetAllJobs: async (currentPage = 1, pageSize = 50) => {
    const result = await axiosApiClient.safeGet(
      '/jobs/', 
      { currentPage, pageSize }, 
      FALLBACK_DATA
    );
    return result;
  },

  safeGetJobById: async (jobId) => {
    const result = await axiosApiClient.safeGet(`/jobs/${jobId}`, {}, null);
    return result;
  }
};

export default axiosJobsApi;