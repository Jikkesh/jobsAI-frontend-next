// lib/axiosApiClient.js
import axios from 'axios';
import axiosRetry from 'axios-retry';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Create axios instance
const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Configure retry logic
axiosRetry(axiosClient, {
  retries: 4, // Number of retries
  retryDelay: axiosRetry.exponentialDelay, // 1s, 2s, 4s, 8s
  retryCondition: (error) => {
    // Retry on network errors and 5xx responses
    return axiosRetry.isNetworkOrIdempotentRequestError(error) ||
           error.code === 'ECONNRESET' ||
           error.code === 'ETIMEDOUT' ||
           error.code === 'ENOTFOUND' ||
           (error.response && error.response.status >= 500);
  },
  onRetry: (retryCount, error, requestConfig) => {
    console.log(`🔄 Retry attempt ${retryCount} for ${requestConfig.url}: ${error.message}`);
  }
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ ${response.status} ${response.config.url} (${response.config.method?.toUpperCase()})`);
    }
    return response.data; // Return just the data
  },
  (error) => {
    // Enhanced error handling
    if (error.code === 'ECONNRESET') {
      error.message = `Connection reset by server: ${error.config?.url}`;
    } else if (error.code === 'ETIMEDOUT') {
      error.message = `Request timeout: ${error.config?.url}`;
    } else if (error.code === 'ENOTFOUND') {
      error.message = `DNS lookup failed: ${error.config?.url}`;
    }

    console.error(`❌ API Error:`, {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.message,
      code: error.code
    });

    return Promise.reject(error);
  }
);

class AxiosApiClient {
  async get(endpoint, params = {}, config = {}) {
    return axiosClient.get(endpoint, {
      params,
      ...config,
    });
  }

  async post(endpoint, data, config = {}) {
    return axiosClient.post(endpoint, data, config);
  }

  async put(endpoint, data, config = {}) {
    return axiosClient.put(endpoint, data, config);
  }

  async delete(endpoint, config = {}) {
    return axiosClient.delete(endpoint, config);
  }

  async postFormData(endpoint, formData, config = {}) {
    return axiosClient.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config
    });
  }

  async putFormData(endpoint, formData, config = {}) {
    return axiosClient.put(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...config
    });
  }

  // Build-safe methods with better error handling
  async safeGet(endpoint, params = {}, fallbackData = null) {
    try {
      const result = await this.get(endpoint, params, {
        timeout: 15000, // Shorter timeout for build
        'axios-retry': {
          retries: 2 // Fewer retries for build
        }
      });
      return result;
    } catch (error) {
      console.warn(`⚠️  Safe GET failed for ${endpoint}:`, error.message);
      return fallbackData;
    }
  }
}

export const axiosApiClient = new AxiosApiClient();
export default axiosApiClient;