export const checkStatus = statusData => {
  let status = '';
  if (statusData === 'sukses') {
    status = 'success';
  } else if (statusData === 'ditolak') {
    status = 'error';
  } else {
    status = 'warning';
  }
  return status;
};

export const checkAlert = statusData => {
  let alert = '';
  if (statusData === 'sukses') {
    alert = 'Diterima';
  } else if (statusData === 'ditolak') {
    alert = 'Ditolak';
  } else {
    alert = 'Pending';
  }
  return alert;
};
