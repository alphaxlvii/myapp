import request from '../utils/request';

export async function login(data) {
  return request('/api/users', {
    method: 'post',
    data: data
  });
}

