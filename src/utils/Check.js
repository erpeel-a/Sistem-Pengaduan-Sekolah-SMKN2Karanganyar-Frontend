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

export const checkLink = (complaintId, complaintEmail, status, userEmail) => {
  let link = `/pengaduan/${complaintId}`;
  if (complaintEmail === userEmail && status === 'pending') {
    link = `/pengaduan/${complaintId}/ubah`;
  }
  return link;
};

export const checkTitle = (complaintEmail, status, userEmail) => {
  let title = 'Detail';
  if (complaintEmail === userEmail && status === 'pending') {
    title = 'Ubah';
  }
  return title;
};
