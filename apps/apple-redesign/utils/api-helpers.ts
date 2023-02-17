export const fetchPostJSON = async(url: string, data?: {}) => {
  try {
    // Default options are marked with *
    const response = await fetch(url, {
      // *GET, POST, PUT, DELETE, etc.
      method: 'POST',
      // no-cors, *cors, same-origin
      mode: 'cors',
       // *default, no-cache, reload, force-cache, only-if-cached
      cache: 'no-cache',
       // include, *same-origin, omit
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // manual, *follow, error
      redirect: 'follow',
       // no-referrer, *client
      referrerPolicy: 'no-referrer',
       // body data type must match "Content-Type" header
      body: JSON.stringify(data || {}),
    });
    return await response.json();
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw err;
  };
};
