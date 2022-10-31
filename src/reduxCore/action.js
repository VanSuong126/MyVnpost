export const loginApp = (data) => {
    return {
      type: 'login/loginApp',
      payload: data,
    };
  };